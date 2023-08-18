import React from "react";
import Card from "../UI/Card";
import Input, { INPUT_TYPE } from "../UI/Input";
import classes from "./LinkShortener.module.css";
import Button from "../UI/Button";
import useInputReducer from "../../hooks/use-input-reducer";
import { isValidUrl, isValidHalfBack } from "../../utils/validators";
import ArrowPNG from "../../assets/arrow.png";
import LinkPNG from "../../assets/link.png";

export const takensUrls = ["","myLink", "link"];
export const url = "onrway-deploy.web.app/";

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
  } = useInputReducer(isValidHalfBack.bind('',url, takensUrls));

  return (
    <Card>
      <form className={classes.form}>
        <Input
          placeholder="Example: https://super-long-link.com/shorten-it"
          type={INPUT_TYPE.LINK}
          value={linkVal || ""}
          hasError={linkHasError}
          errorMsg="Provide a valid link"
          label="Enter your long link:"
          blurHandler={linkBlurHandler}
          changeHandler={linkChangeHandler}
        />
        <section className={classes.domain}>
          <p className={classes.label}>Domain:</p>
          <img src={ArrowPNG} alt="Arrow convert" className={classes.arrow} />
          <img src={LinkPNG} alt="Link icon" className={classes.link} />
          <p className={classes["link-text"]}>{url}</p>
        </section>
        <Input
          placeholder="example:my-link"
          type={INPUT_TYPE.TEXT}
          prefix=""
          styleClass="short"
          errorMsg="Taken or not valid"
          label="Enter a back-half"
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
