import { changeTextSize } from "./changeTextSize";

export const setNumber = (values, number, resultWindow) => {
  if (typeof values.num === "number") {
    values.setNum(number);
    //Если число после подсёта имеет тип данных number, то оно стирается из окна набора числа при наборе
    //следующих цифр (подсчёт возвращает тип данных number)
    return;
  }
  values.setNum(values.num + number);
  resultWindow.style = changeTextSize(values.num + number);
};
