import { protectionFromSignChangeButton } from "./protectionFromSignChangeButton";

export const setOperationWithNumber = (values, sign) => {
  const lastOperation = values.windowWithNums.slice(-1); //Выборка последнего знака операции
  const lastOperationToNumber = Number(lastOperation); //Дальнейшей использование этой
  //переменной подразумевает проверку на знак операциии. Если последний символ будет числом, то выдаст false
  if (values.num === "" && values.windowWithNums === "") {
    //values.num - окно с вводом цифр
    values.windowWithNums = values.windowWithNums + "0" + sign;
    //values.windowWithNums - окно с операциями над числами
    values.setWindowWithNums(values.windowWithNums);
    return;
  }
  //Если в окне ввода числа и в окне с операциями над числами отсутвует число и была нажата кнопка операции,
  //то перед этой операцией ставится нуль в окно с операциями вместе со знаком операции
  values.setWindowWithNums(protectionFromSignChangeButton(values.windowWithNums, values.num, sign));
  if (isNaN(lastOperationToNumber) && values.num === "") {
    //Если отсутсвует число в окне ввода цифр и была нажата кнопка операции, то удаляется последний знак
    //в окне с операциями и заменяется на новый, так же защищает от нескольких знаков операции подряд
    values.windowWithNums = values.windowWithNums.slice(0, -1) + sign;
    values.setWindowWithNums(values.windowWithNums);
  }

  values.setNum("");
};
