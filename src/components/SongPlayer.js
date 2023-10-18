import React, { useEffect, useRef, useState } from "react";
import { FaPlay, FaAngleLeft, FaAngleRight, FaPause } from "react-icons/fa";
import { getAsHrMinFormat } from "../utils";

const SongPlayer = ({ activeSong, nextSongHandler, previousSongHandler }) => {
  const [isSongPlaying, setIsSongPlaying] = useState(false);

  const [songTimings, setSongTimings] = useState({
    duration: 0,
    currentTime: 0,
  });

  const audioRef = useRef(null);

  const initiaTimingUpdatehandler = () => {
    let duration = getAsHrMinFormat(audioRef?.current?.duration || 0);
    let currentTime = getAsHrMinFormat(audioRef?.current?.currentTime || 0);
    setSongTimings({
      duration,
      currentTime,
    });
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

  return (
    <div className="player-container">
      <div className="time-control">
        <p>{songTimings.currentTime || "-"}</p>
        <input type="range" value={0} onChange={() => {}} />
        <p>{songTimings.duration || "-"}</p>
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
        onLoadedMetadata={initiaTimingUpdatehandler}
      />
    </div>
  );
};

export default SongPlayer;
