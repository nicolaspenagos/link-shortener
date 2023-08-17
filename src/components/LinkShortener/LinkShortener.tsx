import React from "react";
import Card from "../UI/Card";
import Input, { INPUT_LINK_TYPE } from "../UI/Input";
import classes from "./LinkShortener.module.css";
import Arrow from "../../assets/arrow.png";
import Button from "../UI/Button";
import useInputReducer from "../../hooks/use-input-reducer";
import { isValidUrl } from "../../utils/validators";
const LinkShortener: React.FC = () => {
  const {
    value: linkVal,
    hasError: linkHasError,
    blurHandler: linkBlurHandler,
    valueChangedHandler: linkChangeHandler,
    clearHandler: linkClearHandler,
  } = useInputReducer(isValidUrl);
  const {
    value: shortLinkVal,
    hasError: shortLinkHasError,
    blurHandler: shortLinkBlurHandler,
    valueChangedHandler: shortLinkChangeHandler,
    clearHandler: shortLinkClearHandler,
  } = useInputReducer(isValidUrl);

  return (
    <Card>
      <form className={classes.form}>
        <Input
          placeholder="Paste your long link"
          type={INPUT_LINK_TYPE}
          value={linkVal || ""}
          hasError={linkHasError}
          errorMsg="Please provide a valid link"
          blurHandler={linkBlurHandler}
          changeHandler={linkChangeHandler}
        />
        <img src={Arrow} alt="Arrow convert" className={classes.arrow} />
        <Input
          placeholder="Create your short link"
          type={INPUT_LINK_TYPE}
          prefix=""
          value={shortLinkVal || ""}
          hasError={shortLinkHasError}
          blurHandler={shortLinkBlurHandler}
          changeHandler={shortLinkChangeHandler}
        />
        <Button text="Shorten link" />
      </form>
    </Card>
  );
};

export default LinkShortener;
