import React from "react";
import classes from "./Button.module.css";

const Button: React.FC<{
  text: string;
  style?: React.CSSProperties;
  type?: "button" | "reset" | "submit" | undefined;
  disabled?:boolean
  className?:string
  onClick?:()=>void
}> = ({ text, style = {}, type = "button", disabled=false, className='', onClick}) => {
  return (
    <button className={`${classes.button} ${className}`} style={style} type={type} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
