import React, { useCallback, memo, useState } from "react";
import { Button } from "./index";
import {
  backspace,
  calcPercent,
  clear,
  countUp,
  partOfWhole,
  point,
  setNumber,
  setOperationWithNumber,
  sqrtRounded,
} from "../../functions/index";
import classes from "./calculator.module.css";

export const Calculator = () => {
  const [num, setNum] = useState("");
  const [windowWithNums, setWindowWithNums] = useState("");
  // num - переменная для набора числа, с которым будут происходить операции
  // windowWithNums - переменная, которая собирает все числа и производит их вычисления
  const values = memo(
    {
      setWindowWithNums: setWindowWithNums,
      setNum: setNum,
      num: num,
      windowWithNums: windowWithNums,
    },
    [num, windowWithNums]
  );
  const resultWindow = React.createRef();
  const setNumberCallback = useCallback(
    (event) => {
      setNumber(values, event.target.innerHTML, resultWindow.current);
    },
    [values, resultWindow]
  );
  const setOperationWithNumberCallback = useCallback(
    (event) => {
      setOperationWithNumber(values, event.target.innerHTML);
    },
    [values]
  );

  return (
    <div className={classes.calculator}>
      <p className={classes.windowWithNums}>{windowWithNums}</p>
      <p className={classes.result} ref={resultWindow}>
        {num === "" ? 0 : num}
      </p>
      <div className={classes.buttonsWrapper}>
        <Button className={classes.operation} content={"%"} onClick={() => calcPercent(values)} />
        <Button className={classes.operation} content={"CE"} onClick={() => setNum("")} />
        <Button
          className={classes.operation}
          content={"C"}
          onClick={() => clear(setNum, setWindowWithNums, resultWindow.current)}
        />
        <Button
          className={classes.operation}
          content={"⌫"}
          onClick={() => setNum(backspace(num, resultWindow.current))}
        />
        <Button className={classes.operation} content={"1/x"} onClick={() => setNum(partOfWhole(num))} />
        <Button className={classes.operation} content={"x²"} onClick={() => setNum(Math.pow(num, 2))} />
        <Button className={classes.operation} content={"√x"} onClick={() => setNum(sqrtRounded(num))} />
        <Button className={classes.operation} content={"/"} onClick={setOperationWithNumberCallback} />
        <Button content={"7"} onClick={setNumberCallback} />
        <Button content={"8"} onClick={setNumberCallback} />
        <Button content={"9"} onClick={setNumberCallback} />
        <Button className={classes.operation} content={"*"} onClick={setOperationWithNumberCallback} />
        <Button content={"4"} onClick={setNumberCallback} />
        <Button content={"5"} onClick={setNumberCallback} />
        <Button content={"6"} onClick={setNumberCallback} />
        <Button className={classes.operation} content={"-"} onClick={setOperationWithNumberCallback} />
        <Button content={"1"} onClick={setNumberCallback} />
        <Button content={"2"} onClick={setNumberCallback} />
        <Button content={"3"} onClick={setNumberCallback} />
        <Button className={classes.operation} content={"+"} onClick={setOperationWithNumberCallback} />
        <Button content={"+/-"} onClick={() => setNum(num * -1)} />
        <Button content={"0"} onClick={setNumberCallback} />
        <Button content={"."} onClick={() => point(num.toString(), setNum)} />
        <Button className={classes.operation} content={"="} onClick={() => countUp(values)} />
      </div>
    </div>
  );
};
