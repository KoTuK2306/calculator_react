export const point = (str) => {
  let point = str;
  if (point.includes(".")) return point;
  if (point.length === 0) point = "0.";
  else point += ".";
  return point;
};
