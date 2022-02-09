import React, { useState } from "react";
import classes from "./calculator.module.css";
import Button from "./Button/Button";
import OperationButton from "./OperationButton/OperationButton";
import { clean } from "../../functions/clean";
import { setOperationWithNumber } from "../../functions/setOperationWithNumber";
import { countUp } from "../../functions/countUp";
import { point } from "../../functions/point";
import { partOfAWhole } from "../../functions/partOfAwhole";
import { sqrt } from "../../functions/sqrt";
import { calcPercent } from "../../functions/calcPercent";
import { setNumber } from "../../functions/setNumber";
import { backspace } from "../../functions/backspace";

const Calculator = () => {
  const [str, setStr] = useState("");
  const [input, setInput] = useState("");
  // str - переменная для набора числа, с которым будут происходить операции
  // input - переменная, которая собирает все числа и производит их вычисления
  const values = {
    setInput: setInput,
    setStr: setStr,
    str: str,
    input: input,
  };
  const resultWindow = React.createRef();

  return (
    <div className={classes.calculator}>
      <p className={classes.input}>{input}</p>
      <p className={classes.result} ref={resultWindow}>
        {str === "" ? 0 : str}
      </p>
      <div className={classes.buttonsWrapper}>
        <OperationButton content={"%"} onClick={() => calcPercent(values)} />
        <OperationButton content={"CE"} onClick={() => setStr("")} />
        <OperationButton content={"C"} onClick={() => clean(setStr, setInput, resultWindow.current)} />
        <OperationButton content={"⌫"} onClick={() => setStr(backspace(str, resultWindow.current))} />
        <OperationButton content={"1/x"} onClick={() => setStr(partOfAWhole(str))} />
        <OperationButton content={"x²"} onClick={() => setStr(Math.pow(str, 2))} />
        <OperationButton content={"√x"} onClick={() => setStr(sqrt(str))} />
        <OperationButton content={"/"} onClick={(event) => setOperationWithNumber(values, event.target.innerHTML)} />
        <Button content={"7"} onClick={(event) => setNumber(values, event.target.innerHTML, resultWindow.current)} />
        <Button content={"8"} onClick={(event) => setNumber(values, event.target.innerHTML, resultWindow.current)} />
        <Button content={"9"} onClick={(event) => setNumber(values, event.target.innerHTML, resultWindow.current)} />
        <OperationButton content={"*"} onClick={(event) => setOperationWithNumber(values, event.target.innerHTML)} />
        <Button content={"4"} onClick={(event) => setNumber(values, event.target.innerHTML, resultWindow.current)} />
        <Button content={"5"} onClick={(event) => setNumber(values, event.target.innerHTML, resultWindow.current)} />
        <Button content={"6"} onClick={(event) => setNumber(values, event.target.innerHTML, resultWindow.current)} />
        <OperationButton content={"-"} onClick={(event) => setOperationWithNumber(values, event.target.innerHTML)} />
        <Button content={"1"} onClick={(event) => setNumber(values, event.target.innerHTML, resultWindow.current)} />
        <Button content={"2"} onClick={(event) => setNumber(values, event.target.innerHTML, resultWindow.current)} />
        <Button content={"3"} onClick={(event) => setNumber(values, event.target.innerHTML, resultWindow.current)} />
        <OperationButton content={"+"} onClick={(event) => setOperationWithNumber(values, event.target.innerHTML)} />
        <Button content={"+/-"} onClick={() => setStr(str * -1)} />
        <Button content={"0"} onClick={(event) => setNumber(values, event.target.innerHTML, resultWindow.current)} />
        <Button content={"."} onClick={() => point(str.toString(), setStr)} />
        <OperationButton content={"="} onClick={() => countUp(values)} />
      </div>
    </div>
  );
};

export default Calculator;
