import * as size from "../constants/textSize";

export const changeTextSize = (inputedNumber, resultWindow) => {
  if (inputedNumber.length > 17 && inputedNumber.length < 44) {
    resultWindow.style = `font-size: ${size.smallTextSize}px`;
    return;
  }
  resultWindow.style = `font-size: ${size.textSize}px`;
};
