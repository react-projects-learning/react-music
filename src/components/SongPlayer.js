import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const SongPlayer = () => {
  return (
    <div className="player-container">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" value={10} />
        <p>End Time</p>
      </div>

      <div className="player-control">
        <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon className="play" icon={faPlay} size="2x" />
        <FontAwesomeIcon
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
        />
      </div>
    </div>
  );
};

export default SongPlayer;
