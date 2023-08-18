import React from "react";
import classes from "./Button.module.css";

const Button: React.FC<{ text: string; style?: React.CSSProperties }> = ({
  text,
  style = {},
}) => {
  return (
    <button className={classes.button} style={style}>
      {text}
    </button>
  );
};

export default Button;
