const result = document.getElementById("result");

export const changeTextSize = (str) => {
  if (str.length > 15) {
    result.style = "font-size: 15px";
  } else result.style = "font-size: 35px";
  return str;
};
