import React from "react";
import Link from "../../assets/link.png";
import classes from "./Input.module.css";

const Input: React.FC<{
  placeholder: string;
  type: string;
  prefix?: string;
  value: string;
  hasError: boolean;
  errorMsg?:string;
  blurHandler: () => void;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({
  placeholder,
  type,
  prefix = "",
  value,
  hasError,
  errorMsg ="",
  blurHandler,
  changeHandler,
}) => {
  let inputIcon = null;
  if (type === INPUT_LINK_TYPE)
    inputIcon = <img src={Link} alt="Link" draggable={false} />;

  return (
    <label className={classes.input}>
      {inputIcon}
      {prefix != "" && <p>{prefix}</p>}
      <div>
        <input
          className={hasError ? classes.invalid : ""}
          placeholder={placeholder}
          value={value}
          onBlur={blurHandler}
          onChange={changeHandler}
        />
        {hasError&&<p className={classes["error-msg"]}>{errorMsg}</p>}
      </div>
    </label>
  );
};

export default Input;
export const INPUT_LINK_TYPE = "_linkType";
