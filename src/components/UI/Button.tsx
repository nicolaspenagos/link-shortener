import React from "react";
import classes from "./Button.module.css";

const Button: React.FC<{ text: string }> = ({ text }) => {
    return (
        <button className={classes.button}>
            {text}
        </button>
    )
}

export default Button;