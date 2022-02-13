export const countUp = (values) => {
  if (values.num === "" && values.windowWithNums !== "") {
    //Данное условие удаляет последний знак операции, если окно с набором числа пустое
    //(fixing error: unexpected end of windowWithNums)
    const windowWithNumbersWithoutLastOperation = values.windowWithNums.slice(0, -1);
    values.setNum(Number(eval(windowWithNumbersWithoutLastOperation)));
    values.setWindowWithNums("");
    return;
  }
  values.setNum(Number(eval(values.windowWithNums + values.num).toFixed(7)));
  values.setWindowWithNums("");
};
