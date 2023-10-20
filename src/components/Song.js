import React, { useContext } from "react";
import { AppContext } from "../AppContext";

const Song = () => {
  const {
    activeSong: { name, cover, artist },
  } = useContext(AppContext);

  return (
    <div className="song-container">
      <img src={cover} alt="song-cover" />
      <h2>{name}</h2>
      <h3>{artist}</h3>
    </div>
  );
};

export default Song;
