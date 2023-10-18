import React from "react";

const Song = ({ activeSong: { name, cover, artist } }) => {
  return (
    <div className="song-container">
      <img src={cover} alt="song-cover" />
      <h2>{name}</h2>
      <h3>{artist}</h3>
    </div>
  );
};

export default Song;
