import * as size from "../constants/textSize";

export const changeTextSize = (inputedNumber, resultWindow) => {
  if (inputedNumber.length > 15 && inputedNumber.length < 39) {
    resultWindow.style = `font-size: ${size.smallTextSize}px`;
    return;
  }
  resultWindow.style = `font-size: ${size.textSize}px`;
};
