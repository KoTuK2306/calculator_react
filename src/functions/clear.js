import { textSize } from "../constants/textSize";

export const clear = (setNum, setWindowWithNums, resultWindow) => {
  setNum(""); //Очистить окно набора чисел
  setWindowWithNums(""); //Очистить окно с операциями над числами
  resultWindow.style = `font-size: ${textSize}px`; //Сбросить стили окна результата
};
