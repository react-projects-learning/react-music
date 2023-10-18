import React, { useEffect, useRef, useState } from "react";
import { FaPlay, FaAngleLeft, FaAngleRight, FaPause } from "react-icons/fa";
import { round } from "../utils";

const SongPlayer = ({ activeSong, nextSongHandler, previousSongHandler }) => {
  const [isSongPlaying, setIsSongPlaying] = useState(false);
  const [songTimings, setSongTimings] = useState({
    duration: 0,
    currentTime: 0,
    percentCompleted: 0,
  });

  const audioRef = useRef(null);

  const intervalRef = useRef();

  // when song changes reset all songTimings
  useEffect(() => {
    console.log("Song changed");
    clearInterval(intervalRef.current);
    setSongTimings({ duration: 0, currentTime: 0, percentCompleted: 0 });
  }, [activeSong]);

  // when song is playing update timings using useInterval
  // if song stops clear the interval
  useEffect(() => {
    if (isSongPlaying) {
      console.log("isSongPlaying is true");
      intervalRef.current = setInterval(() => {
        let duration = round(audioRef?.current?.duration / 60);
        let currentTime = round(audioRef?.current?.currentTime / 60);
        let percentCompleted = round((currentTime / duration) * 100);

        setSongTimings({
          duration,
          currentTime,
          percentCompleted,
        });
      }, 100);
    } else {
      console.log("isSongPlaying is false");
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isSongPlaying]);

  const playSongHandler = () => {
    if (isSongPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsSongPlaying((x) => !x);
  };

  return (
    <div className="player-container">
      <div className="time-control">
        <p>{songTimings.currentTime || "-"}</p>
        <input type="range" value={songTimings.percentCompleted || "0"} />
        <p>{songTimings.duration || "-"}</p>
      </div>

      <div className="player-control">
        <FaAngleLeft className="skip-back" onClick={previousSongHandler} />
        {!isSongPlaying && (
          <FaPlay className="play" onClick={playSongHandler} />
        )}
        {isSongPlaying && (
          <FaPause className="pause" onClick={playSongHandler} />
        )}
        <FaAngleRight className="skip-forward" onClick={nextSongHandler} />
      </div>

      <audio src={activeSong.audio} ref={audioRef} />
    </div>
  );
};

export default SongPlayer;
