import { createContext, useState, useRef } from "react";
import songs from "./data";

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
  nextSongHandler: () => {},
  previousSongHandler: () => {},
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

  const nextSongHandler = () => {
    let nextActiveSongIndex;
    const activeSongIndex = allSongs.findIndex((s) => s.id === activeSong.id);
    if (activeSongIndex === allSongs.length - 1) {
      nextActiveSongIndex = 0;
    } else {
      nextActiveSongIndex = activeSongIndex + 1;
    }
    setAllSongs((x) =>
      x.map((s, i) => ({ ...s, active: i === nextActiveSongIndex }))
    );
    setActiveSong({
      ...allSongs[nextActiveSongIndex],
      active: true,
    });
  };

  const previousSongHandler = () => {
    let prevActiveSongIndex;
    const activeSongIndex = allSongs.findIndex((s) => s.id === activeSong.id);
    if (activeSongIndex === 0) {
      prevActiveSongIndex = allSongs.length - 1;
    } else {
      prevActiveSongIndex = activeSongIndex - 1;
    }
    setAllSongs((x) =>
      x.map((s, i) => ({ ...s, active: i === prevActiveSongIndex }))
    );
    setActiveSong({
      ...allSongs[prevActiveSongIndex],
      active: true,
    });
  };

  const changeSongHandler = (newActiveSong) => {
    setActiveSong({ ...newActiveSong, active: true });
    setAllSongs((x) =>
      x.map((s) => ({ ...s, active: s.id === newActiveSong.id }))
    );
    if (activeSongInfo.isSongPlaying) {
      // audioRef.current.play() return a promise
      // which is resolved when audio is ready to play
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((_) => {
          audioRef.current.play();
        });
      }
    }
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

  return (
    <AppContext.Provider
      value={{
        allSongs,
        activeSong,
        previousSongHandler,
        nextSongHandler,
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
        />
      </>
    </AppContext.Provider>
  );
};

export default AppContextProvider;
