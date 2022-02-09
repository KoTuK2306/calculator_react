export const calcPercent = (values) => {
  const sign = values.input.slice(-1); //Выборка последнего знака операции
  const equation = eval(values.input.slice(0, -1));
  values.setInput("");
  if (sign === "+" || sign === "-") {
    values.setStr(eval(equation + sign + equation * (values.str / 100))); //Подсчёт процента от числа
    return;
  }
  if (sign === "*" || sign === "/") {
    values.setStr(eval(equation + sign + values.str / 100));
    return;
  }
  values.setStr(values.str / 100);
  values.setInput("");
};
