import { createContext, useState, useRef } from "react";
import songs from "./data";
import { playAudio } from "./utils";

export const AppContext = createContext({
  allSongs: [],
  activeSong: {
    name: "",
    cover: "",
    artist: "",
    audio: "",
    color: [],
    id: "",
    active: true,
  },
  activeSongInfo: { duration: 0, currentTime: 0, isSongPlaying: false },
  playSongHandler: () => {},
  nextPrevSongHandler: () => {},
  changeSongHandler: () => {},
  audioSeekedHandler: () => {},
});

const AppContextProvider = (props) => {
  const [allSongs, setAllSongs] = useState(songs);

  const [activeSong, setActiveSong] = useState(allSongs[0]);

  const [activeSongInfo, setActiveSongInfo] = useState({
    duration: 0,
    currentTime: 0,
    isSongPlaying: false,
  });

  const audioRef = useRef(null);

  const playSongHandler = () => {
    if (activeSongInfo.isSongPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setActiveSongInfo((x) => ({ ...x, isSongPlaying: !x.isSongPlaying }));
  };

  const nextPrevSongHandler = (side) => {
    let newActiveSongIndex;
    const activeSongIndex = allSongs.findIndex((s) => s.id === activeSong.id);
    if (side === "next") {
      newActiveSongIndex = (activeSongIndex + 1) % allSongs.length;
    } else {
      newActiveSongIndex = activeSongIndex - 1;
      if (newActiveSongIndex < 0) {
        newActiveSongIndex = allSongs.length - 1;
      }
    }
    setAllSongs((x) =>
      x.map((s, i) => ({ ...s, active: i === newActiveSongIndex }))
    );
    setActiveSong({
      ...allSongs[newActiveSongIndex],
      active: true,
    });
    playAudio(activeSongInfo.isSongPlaying, audioRef);
  };

  const changeSongHandler = (newActiveSong) => {
    setActiveSong({ ...newActiveSong, active: true });
    setAllSongs((x) =>
      x.map((s) => ({ ...s, active: s.id === newActiveSong.id }))
    );
    playAudio(activeSongInfo.isSongPlaying, audioRef);
  };

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setActiveSongInfo((x) => ({ ...x, currentTime, duration }));
  };

  const audioSeekedHandler = (e) => {
    console.log("I am seeking");
    setActiveSongInfo((x) => ({ ...x, currentTime: e.target.value }));
    audioRef.current.currentTime = e.target.value;
  };

  const songEndedHandler = (e) => {
    console.log("Song is ended");
    nextPrevSongHandler("next");
  };

  return (
    <AppContext.Provider
      value={{
        allSongs,
        activeSong,
        nextPrevSongHandler,
        changeSongHandler,
        activeSongInfo,
        playSongHandler,
        audioSeekedHandler,
      }}
    >
      <>
        {props.children}
        <audio
          src={activeSong.audio}
          ref={audioRef}
          onTimeUpdate={timeUpdateHandler}
          onLoadedMetadata={timeUpdateHandler}
          onEnded={songEndedHandler}
        />
      </>
    </AppContext.Provider>
  );
};

export default AppContextProvider;
