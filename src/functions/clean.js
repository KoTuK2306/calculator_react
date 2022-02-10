import { textSize } from "../constants/textSize";

export const clean = (setStr, setInput, resultWindow) => {
  setStr(""); //Очистить окно набора чисел
  setInput(""); //Очистить окно с операциями над числами
  resultWindow.style = `font-size: ${textSize}px`; //Сбросить стили окна результата
};
