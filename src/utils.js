export const round = (num) => {
  return Math.round((num + Number.EPSILON) * 100) / 100;
};

export const clone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

export const getAsHrMinFormat = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
};

export const playAudio = (isSongPlaying, audioRef) => {
  if (isSongPlaying) {
    // audioRef.current.play() return a promise
    // which is resolved when audio is ready to play
    const playSongPromise = audioRef.current.play();
    if (playSongPromise !== undefined) {
      playSongPromise.then((_) => {
        audioRef.current.play();
      });
    }
  }
};
