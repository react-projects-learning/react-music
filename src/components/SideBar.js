import React, { useContext } from "react";
import SongCard from "./SongCard";
import { AppContext } from "../AppContext";

const SideBar = () => {
  const { allSongs } = useContext(AppContext);

  return (
    <>
      {/* <div className="cover"></div> */}
      <div className="sidebar">
        <h2>Library</h2>
        {allSongs.map((song) => (
          <SongCard song={song} key={song.id} />
        ))}
      </div>
    </>
  );
};

export default SideBar;
