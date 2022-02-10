export const countUp = (values) => {
  if (values.str === "" && values.input !== "") {
    //Данное условие удаляет последний знак операции, если окно с набором числа пустое
    //(fixing error: unexpected end of input)
    values.setStr(Number(eval(values.input.slice(0, -1))));
    values.setInput("");
    return;
  }
  values.setStr(Number(eval(values.input + values.str).toFixed(7)));
  values.setInput("");
};
