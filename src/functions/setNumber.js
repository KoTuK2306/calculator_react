import { changeTextSize } from "./changeTextSize";

export const setNumber = (values, number, resultWindow) => {
  if (typeof values.str === "number") {
    values.setStr(number);
    //Если число после подсёта имеет тип данных number, то оно стирается при наборе следующих цифр
    //(подсчёт возвращает тип данных number)
    return;
  }
  values.setStr(values.str + number);
  changeTextSize(values.str, resultWindow);
};
