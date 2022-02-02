/* eslint-disable no-eval */
import React, { useState } from "react";
import classes from "./calculator.module.css";
import Button from "./Button/Button";
import OperationButton from "./OperationButton/OperationButton";
import { calcPercent } from "../../functions/calcPercent";

const Calculator = () => {
  const [str, setStr] = useState("");
  const [input, setInput] = useState("");
  // str - переменная для набора числа, с которым будут происходить операции
  // input - переменная, которая собирает все числа и производит их вычисления
  const setNumber = (event) => {
    if (event.target.className === "calculator_buttonsWrapper__CjEPQ") {
      return;
    }
    setStr(str + event.target.innerHTML);
    switch (event.target.id) {
      case "clean":
        setStr("");
        setInput("");
        break;
      case "sum":
        setInput(input + str + "+");
        setStr("");
        break;
      case "minus":
        setInput(input + str + "-");
        setStr("");
        break;
      case "multiple":
        setInput(input + str + "*");
        setStr("");
        break;
      case "divide":
        setInput(input + str + "/");
        setStr("");
        break;
      case "countUp":
        const result = eval(input + str);
        setStr(result);
        setInput("");
        break;
      case "deleteLastOperation":
        setStr("");
        break;
      case "sqrt":
        const sqrt = Math.sqrt(str);
        setStr(sqrt);
        break;
      case "square":
        const square = Math.pow(2, str);
        setStr(square);
        break;
      case "partOfAWhole":
        const partOfAWhole = Number((1 / str).toFixed(7));
        setStr(partOfAWhole);
        break;
      case "percent":
        const percent = eval(input + str);
        setStr(calcPercent(percent));
        setInput("");
        break;
      case "backspace":
        setStr(str.slice(0, -1));
        break;
      default:
        break;
    }
  };
  return (
    <div className={classes.calculator}>
      <p className={classes.input}>{input}</p>
      <p className={classes.result}>{str === "" ? 0 : str}</p>
      <div
        className={classes.buttonsWrapper}
        onClick={(event) => {
          setNumber(event);
        }}
      >
        <OperationButton content={"%"} id={"percent"} />
        <OperationButton content={"CE"} id={"deleteLastOperation"} />
        <OperationButton content={"C"} id={"clean"} />
        <OperationButton content={"⌫"} id={"backspace"} />
        <OperationButton content={"1/x"} id={"partOfAWhole"} />
        <OperationButton content={"x²"} id={"square"} />
        <OperationButton content={"√x"} id={"sqrt"} />
        <OperationButton content={"÷"} id={"divide"} />
        <Button content={"7"} />
        <Button content={"8"} />
        <Button content={"9"} />
        <OperationButton content={"×"} id={"multiple"} />
        <Button content={"4"} />
        <Button content={"5"} />
        <Button content={"6"} />
        <OperationButton content={"-"} id={"minus"} />
        <Button content={"1"} />
        <Button content={"2"} />
        <Button content={"3"} />
        <OperationButton content={"+"} id={"sum"} />
        <Button content={"+/-"} id={"changeSign"} />
        <Button content={"0"} />
        <Button content={"."} id={"comma"} />
        <OperationButton content={"="} id={"countUp"} />
      </div>
    </div>
  );
};

export default Calculator;
