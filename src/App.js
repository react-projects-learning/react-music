import "./styles/style.scss";
import Song from "./components/Song";
import SongPlayer from "./components/SongPlayer";
import { useState } from "react";
import songs from "./data";

const App = () => {
  const [allSongs, setAllSongs] = useState(songs);
  const [activeSong, setActiveSong] = useState(allSongs[0]);

  const nextSongHandler = () => {
    let nextActiveSongIndex;
    const activeSongIndex = allSongs.findIndex((s) => s.id === activeSong.id);
    if (activeSongIndex === allSongs.length - 1) {
      nextActiveSongIndex = 0;
    } else {
      nextActiveSongIndex = activeSongIndex + 1;
    }
    setAllSongs((x) => {
      return x.map((s, i) => {
        if (s.id === activeSong.id) {
          s.active = false;
        }
        if (i === nextActiveSongIndex) {
          s.active = true;
        }
        return s;
      });
    });
    console.log(allSongs[nextActiveSongIndex]);
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
    setAllSongs((x) => {
      return x.map((s, i) => {
        if (s.id === activeSong.id) {
          s.active = false;
        }
        if (i === prevActiveSongIndex) {
          s.active = true;
        }
        return s;
      });
    });
    console.log(allSongs[prevActiveSongIndex]);
    setActiveSong({
      ...allSongs[prevActiveSongIndex],
      active: true,
    });
  };

  return (
    <div className="App">
      <Song activeSong={activeSong} />
      <SongPlayer
        activeSong={activeSong}
        nextSongHandler={nextSongHandler}
        previousSongHandler={previousSongHandler}
      />
    </div>
  );
};

export default App;
