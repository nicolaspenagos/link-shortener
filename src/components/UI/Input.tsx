import React from "react";
import Link from "../../assets/link.png";
import classes from "./Input.module.css";

export enum INPUT_TYPE {
  LINK,
  TEXT,
}

const Input: React.FC<{
  placeholder?: string;
  type: INPUT_TYPE;
  prefix?: string;
  value?: string;
  hasError?: boolean;
  errorMsg?: string;
  label?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  blurHandler?: () => void;
  changeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({
  placeholder="",
  type,
  prefix = "",
  value,
  hasError,
  errorMsg = "",
  label,
  style = {},
  disabled = false,
  blurHandler,
  changeHandler,
}) => {
  let inputIcon = null;
  if (type === INPUT_TYPE.LINK)
    inputIcon = <img src={Link} alt="Link" draggable={false} />;

  return (
    <label className={classes.input} style={style}>
      {inputIcon}
      {prefix !== "" && <p>{prefix}</p>}
      <div>
        {label && <p className={classes.label}>{label}</p>}
        <input
          className={hasError ? classes.invalid : ""}
          placeholder={placeholder}
          value={value}
          onBlur={blurHandler}
          onChange={changeHandler}
          disabled={disabled}
        />
        {hasError && <p className={classes["error-msg"]}>{errorMsg}</p>}
      </div>
    </label>
  );
};

export default Input;
