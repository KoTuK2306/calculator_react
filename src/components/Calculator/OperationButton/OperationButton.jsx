import classes from "./operationButton.module.css";

const OperationButton = (props) => {
  return (
    <button className={classes.button} id={props.id}>
      {props.content}
    </button>
  );
};

export default OperationButton;
