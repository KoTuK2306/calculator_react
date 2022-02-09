import classes from "./operationButton.module.css";

const OperationButton = (props) => {
  return (
    <button className={classes.button} id={props.id} onClick={props.onClick}>
      {props.content}
    </button>
  );
};

export default OperationButton;
