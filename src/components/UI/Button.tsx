import React from "react";
import classes from "./Button.module.css";

const Button: React.FC<{
  text: string;
  style?: React.CSSProperties;
  type?: "button" | "reset" | "submit" | undefined;
  disabled?:boolean
  className?:string
}> = ({ text, style = {}, type = "button", disabled=false, className=''}) => {
  return (

    <button className={`${classes.button} ${className}`} style={style} type={type} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
