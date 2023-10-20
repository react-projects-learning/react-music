import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import SongCard from "./SongCard";
import { AppContext } from "../AppContext";

const SideBar = ({ isSideBarOpen, setIsSideBarOpen }) => {
  const { allSongs } = useContext(AppContext);

  return (
    <>
      {/* <div className="cover"></div> */}
      <div className={`sidebar ${isSideBarOpen ? "sidebar--open" : ""}`}>
        <div className="sidebar__heading">
          <h2>Library</h2>
          <RxCross1 className="close" onClick={() => setIsSideBarOpen(false)} />
        </div>
        {allSongs.map((song) => (
          <SongCard song={song} key={song.id} />
        ))}
      </div>
    </>
  );
};

export default SideBar;
