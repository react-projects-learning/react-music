export const round = (num) => {
  return Math.round((num + Number.EPSILON) * 100) / 100;
};

export const clone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
