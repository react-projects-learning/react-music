import React, { useContext } from "react";
import { FaPlay, FaAngleLeft, FaAngleRight, FaPause } from "react-icons/fa";
import { getAsHrMinFormat } from "../utils";
import { AppContext } from "../AppContext";

const SongPlayer = () => {
  const {
    activeSongInfo,
    nextSongHandler,
    previousSongHandler,
    playSongHandler,
    audioSeekedHandler,
  } = useContext(AppContext);

  return (
    <div className="player-container">
      <div className="time-control">
        <p>{getAsHrMinFormat(activeSongInfo.currentTime)}</p>
        <input
          type="range"
          min={0}
          max={activeSongInfo.duration}
          value={activeSongInfo.currentTime}
          onChange={audioSeekedHandler}
        />
        <p>{getAsHrMinFormat(activeSongInfo.duration)}</p>
      </div>

      <div className="player-control">
        <FaAngleLeft onClick={previousSongHandler} />
        {!activeSongInfo.isSongPlaying && <FaPlay onClick={playSongHandler} />}
        {activeSongInfo.isSongPlaying && <FaPause onClick={playSongHandler} />}
        <FaAngleRight onClick={nextSongHandler} />
      </div>
    </div>
  );
};

export default SongPlayer;
