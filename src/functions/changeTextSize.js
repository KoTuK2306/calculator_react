export const changeTextSize = (inputedNumber, resultWindow) => {
  if (inputedNumber.length > 15 && inputedNumber.length <= 38) {
    resultWindow.style = "font-size: 15px";
  } else resultWindow.style = "font-size: 35px";
};
