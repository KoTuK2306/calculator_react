export const calcPercent = (values) => {
  const sign = values.input.slice(-1); //Выборка последнего знака операции
  const equation = eval(values.input.slice(0, -1));
  const stringForEvalPercent = equation + sign + equation * (values.str / 100);
  //Данная переменная создаёт строку для подсчёта процента от числа, сначала подисчитываются все операции, затем
  // они складываются со знаком операции, далее складывается с подсчитанными операциями, умноженными на процент от
  // веденного числа. Например, 100 - 30% = 70
  values.setInput("");
  if (["+", "-"].includes(sign)) {
    values.setStr(eval(stringForEvalPercent)); //Подсчёт процента от числа
    return;
  }
  if (["*", "/"].includes(sign)) {
    values.setStr(eval(equation + sign + values.str / 100));
    return;
  }
  values.setStr(values.str / 100);
  values.setInput("");
};
