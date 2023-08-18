import React, { lazy } from "react";
import Link from "../../assets/link.png";
import classes from "./Input.module.css";

const Input: React.FC<{
  placeholder: string;
  type: INPUT_TYPE;
  prefix?: string;
  value: string;
  hasError: boolean;
  errorMsg?: string;
  styleClass?: string;
  label?: string;
  blurHandler: () => void;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({
  placeholder,
  type,
  prefix = "",
  value,
  hasError,
  errorMsg = "",
  styleClass = "",
  label,
  blurHandler,
  changeHandler,
}) => {
  let inputIcon = null;
  if (type === INPUT_TYPE.LINK)
    inputIcon = <img src={Link} alt="Link" draggable={false} />;

  return (
    <label className={classes.input}>
      {inputIcon}
      {prefix != "" && <p>{prefix}</p>}

      <div>
        {label && <p className={classes.label}>{label}</p>}
        <input
          className={`${hasError ? classes.invalid : ""} ${
            styleClass && classes[styleClass]
          }`}
          placeholder={placeholder}
          value={value}
          onBlur={blurHandler}
          onChange={changeHandler}
        />
        {hasError && <p className={classes["error-msg"]}>{errorMsg}</p>}
      </div>
    </label>
  );
};

export default Input;

export enum INPUT_TYPE {
  LINK,
  TEXT,
}
