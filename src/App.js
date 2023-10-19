import "./styles/style.scss";
import Song from "./components/Song";
import SongPlayer from "./components/SongPlayer";
import { useState } from "react";
import songs from "./data";
import SideBar from "./components/SideBar";

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
  };

  return (
    <div className="App">
      <Song activeSong={activeSong} />
      <SongPlayer
        activeSong={activeSong}
        nextSongHandler={nextSongHandler}
        previousSongHandler={previousSongHandler}
      />
      <SideBar allSongs={allSongs} changeSongHandler={changeSongHandler} />
    </div>
  );
};

export default App;
