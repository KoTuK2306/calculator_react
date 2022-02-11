import { protectionFromSignChangeButton } from "./protectionFromSignChangeButton";

export const setOperationWithNumber = (values, sign) => {
  const lastOperation = values.input.slice(-1); //Выборка последнего знака операции
  const numberingLastOperation = Number(lastOperation); //Дальнейшей использование этой
  //переменной подразумевает проверку на знак операциии. Если последний символ будет числом, то выдаст false
  values.setInput(protectionFromSignChangeButton(values.input, values.str, sign));
  if (isNaN(numberingLastOperation) && values.str === "") {
    //Если строка пустая и была нажата кнопка операции, то удаляется последний знак и заменяется на новый
    //Так же защищает от нескольких знаков операции подряд
    values.input = values.input.slice(0, -1) + sign;
    values.setInput(values.input);
  }
  values.setStr("");
};
