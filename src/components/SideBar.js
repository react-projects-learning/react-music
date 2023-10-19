import React from "react";
import SongCard from "./SongCard";

const SideBar = ({ allSongs, changeSongHandler }) => {
  return (
    <>
      <div className="cover"></div>
      <div className="sidebar">
        <h2>Library</h2>
        {allSongs.map((song) => (
          <SongCard
            song={song}
            key={song.id}
            changeSongHandler={changeSongHandler}
          />
        ))}
      </div>
    </>
  );
};

export default SideBar;
