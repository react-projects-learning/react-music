import React from "react";

const Song = ({ activeSong: { name, cover, artist } }) => {
  return (
    <div className="song-container">
      <img src={cover} alt="song-cover" />
      <p>{name}</p>
      <p>{artist}</p>
    </div>
  );
};

export default Song;
