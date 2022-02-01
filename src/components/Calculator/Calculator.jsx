import classes from "./calculator.module.css";
import Button from "./Button/Button";
import OperationButton from "./OperationButton/OperationButton";

const Calculator = () => {
  return (
    <div className={classes.calculator}>
      <p className={classes.input}></p>
      <p className={classes.result}>0</p>
      <div className={classes.buttonsWrapper}>
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
