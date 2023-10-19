import React from "react";

const SongCard = ({ song, changeSongHandler }) => {
  const songChangeHandler = (id) => {
    changeSongHandler(id);
  };

  return (
    <div
      className={`card ${song.active ? "active" : ""}`}
      onClick={() => songChangeHandler(song.id)}
    >
      <img src={song.cover} className="song-cover" alt={song.name} />
      <div className="song-info">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default SongCard;
