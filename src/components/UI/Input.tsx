import React from "react";
import Link from "../../assets/link.png";
import classes from "./Input.module.css";

const Input: React.FC<{ placeholder: string, type:string, prefix?:string }> = ({ placeholder, type, prefix = "" }) => {

    let inputIcon = null;
    if(type===INPUT_LINK_TYPE) inputIcon = <img src={Link} alt="Link" draggable={false}/>

    

    return (
        <div className={classes.input}>
            {inputIcon}
            {prefix!=""&&<p>{prefix}</p>}
            <input placeholder={placeholder}/>
        </div>
    );
}

export default Input;
export const INPUT_LINK_TYPE = "_linkType";