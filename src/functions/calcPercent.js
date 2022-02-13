export const calcPercent = (values) => {
  const sign = values.windowWithNums.slice(-1); //Выборка последнего знака операции
  const equation = eval(values.windowWithNums.slice(0, -1));
  const stringForEvalPercent = equation + sign + equation * (values.num / 100);
  //Данная переменная создаёт строку для подсчёта процента от числа, сначала подисчитываются все операции, затем
  // они складываются со знаком операции, далее складывается с подсчитанными операциями, умноженными на процент от
  // веденного числа. Например, 100 - 30% = 70
  values.setWindowWithNums("");
  if (sign === "+" || sign === "-") {
    values.setNum(eval(stringForEvalPercent)); //Подсчёт процента от числа
    return;
  }
  if (sign === "*" || sign === "/") {
    values.seNum(eval(equation + sign + values.num / 100));
    return;
  }
  values.setNum(values.num / 100);
  values.setWindowWithNums("");
};
