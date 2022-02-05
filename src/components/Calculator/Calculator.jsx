/* eslint-disable no-eval */
import React, { useState } from "react";
import classes from "./calculator.module.css";
import Button from "./Button/Button";
import OperationButton from "./OperationButton/OperationButton";
import { setNumber } from "../../functions/setNumber";

const Calculator = () => {
  const [str, setStr] = useState("");
  const [input, setInput] = useState("");
  // str - переменная для набора числа, с которым будут происходить операции
  // input - переменная, которая собирает все числа и производит их вычисления
  return (
    <div className={classes.calculator}>
      <p className={classes.input}>{input}</p>
      <p id={"result"} className={classes.result}>
        {str === "" ? 0 : str}
      </p>
      <div
        className={classes.buttonsWrapper}
        id={"buttonsWrapper"}
        onClick={(event) => setNumber(event, setStr, setInput, str, input)}
      >
        <OperationButton content={"%"} id={"PERCENT"} />
        <OperationButton content={"CE"} id={"DELETE_LAST_OPERATION"} />
        <OperationButton content={"C"} id={"CLEAN"} />
        <OperationButton content={"⌫"} id={"BACKSPACE"} />
        <OperationButton content={"1/x"} id={"PART_OF_A_WHOLE"} />
        <OperationButton content={"x²"} id={"SQUARE"} />
        <OperationButton content={"√x"} id={"SQRT"} />
        <OperationButton content={"/"} id={"DIVIDE"} />
        <Button content={"7"} />
        <Button content={"8"} />
        <Button content={"9"} />
        <OperationButton content={"*"} id={"MULTIPLE"} />
        <Button content={"4"} />
        <Button content={"5"} />
        <Button content={"6"} />
        <OperationButton content={"-"} id={"MINUS"} />
        <Button content={"1"} />
        <Button content={"2"} />
        <Button content={"3"} />
        <OperationButton content={"+"} id={"SUM"} />
        <Button content={"+/-"} id={"CHANGE_SIGN"} />
        <Button content={"0"} />
        <Button content={"."} id={"POINT"} />
        <OperationButton content={"="} id={"COUNT_UP"} />
      </div>
    </div>
  );
};

export default Calculator;
