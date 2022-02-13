import * as size from "../constants/textSize";
const numberLenght = 17;
//Максимальная длина числа, которая может поместиться в окне ввода числа со стандартным стилем шрифта
const numberLenghtForSmallSize = 44;
//Максимальная длина числа, которая может поместиться в окне ввода числа с уменьшенным размером шрифта

export const changeTextSize = (inputedNumber) => {
  if (inputedNumber.length > numberLenght && inputedNumber.length < numberLenghtForSmallSize) {
    return `font-size: ${size.smallTextSize}px`;
  }
  return `font-size: ${size.textSize}px`;
};
