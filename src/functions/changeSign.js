export const changeSign = (str) => {
  if (Number(str) === 0) {
    str = "";
  } else str = str * -1;
  return str;
};
