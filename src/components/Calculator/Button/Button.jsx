import classes from "./button.module.css";

export const Button = (props) => {
  return (
    <button className={classes.button + " " + props.className} id={props.id} onClick={props.onClick}>
      {props.content}
    </button>
  );
};
