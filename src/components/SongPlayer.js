import React, { useRef, useState } from "react";
import { FaPlay, FaAngleLeft, FaAngleRight, FaPause } from "react-icons/fa";
import { getAsHrMinFormat } from "../utils";

const SongPlayer = ({ activeSong, nextSongHandler, previousSongHandler }) => {
  const [isSongPlaying, setIsSongPlaying] = useState(false);

  const [songTimings, setSongTimings] = useState({
    duration: 0,
    currentTime: 0,
  });

  const audioRef = useRef(null);

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongTimings({ currentTime, duration });
  };

  const playSongHandler = () => {
    if (isSongPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsSongPlaying((x) => !x);
  };

  const songChangeHandler = (side) => {
    if (side === "prev") {
      previousSongHandler();
    } else {
      nextSongHandler();
    }
  };

  const audioSeekedHandler = (e) => {
    console.log("I am seeking");
    setSongTimings((x) => ({ ...x, currentTime: e.target.value }));
    audioRef.current.currentTime = e.target.value;
  };

  return (
    <div className="player-container">
      <div className="time-control">
        <p>{getAsHrMinFormat(songTimings.currentTime) || "-"}</p>
        <input
          type="range"
          min={0}
          max={songTimings.duration}
          value={songTimings.currentTime}
          onChange={audioSeekedHandler}
        />
        <p>{getAsHrMinFormat(songTimings.duration) || "-"}</p>
      </div>

      <div className="player-control">
        <FaAngleLeft onClick={() => songChangeHandler("prev")} />
        {!isSongPlaying && <FaPlay onClick={playSongHandler} />}
        {isSongPlaying && <FaPause onClick={playSongHandler} />}
        <FaAngleRight onClick={() => songChangeHandler("next")} />
      </div>

      <audio
        src={activeSong.audio}
        ref={audioRef}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
      />
    </div>
  );
};

export default SongPlayer;
