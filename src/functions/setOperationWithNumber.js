import { protectionFromDoubleSigns } from "./protectionFromDoubleSigns";

export const setOperationWithNumber = (values, sign) => {
  values.setInput(protectionFromDoubleSigns(values.input, values.str, sign));
  if (isNaN(Number(values.input.slice(-1))) && values.str === "") {
    //Если строка пустая и была нажата кнопка операции, то удаляется последний знак и заменяется на новый
    //Так же защищает от нескольких знаков операции подряд
    values.input = values.input.slice(0, -1) + sign;
    values.setInput(values.input);
  }
  values.setStr("");
};
