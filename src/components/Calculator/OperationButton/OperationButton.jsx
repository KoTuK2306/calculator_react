import classes from "./operationButton.module.css";

const OperationButton = (props) => {
  return <button className={classes.button}>{props.content}</button>;
};

export default OperationButton;
