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
