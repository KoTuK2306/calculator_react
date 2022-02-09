import classes from "./button.module.css";

const Button = (props) => {
  return (
    <button className={classes.button} id={props.id} onClick={props.onClick}>
      {props.content}
    </button>
  );
};

export default Button;
