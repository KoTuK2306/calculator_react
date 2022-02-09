import { changeTextSize } from "./changeTextSize";

export const backspace = (inputedNumber, resultWindow) => {
  inputedNumber = inputedNumber.toString().slice(0, -1);
  changeTextSize(inputedNumber, resultWindow);
  return inputedNumber;
};
