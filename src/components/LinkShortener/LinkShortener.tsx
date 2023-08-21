import React, { useContext, useState, useEffect, useRef } from "react";
import Card from "../UI/Card";
import Input, { INPUT_TYPE } from "../UI/Input";
import classes from "./LinkShortener.module.css";
import Button from "../UI/Button";
import useInputReducer from "../../hooks/use-input-reducer";
import { isValidUrl, isValidHalfBack } from "../../utils/string-validators";
import ArrowPNG from "../../assets/arrow.png";
import LinkPNG from "../../assets/link.png";
import { LinksContext } from "../../store/links-context";
import Modal from "../UI/Modal";
import { MODAL_TYPE } from "../UI/Modal";

export const takensUrls = ["", "myLink", "link"];
export const url = "onrway-deploy.web.app/";

const LinkShortener: React.FC = () => {
  const linksCtx = useContext(LinksContext);
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
  } = useInputReducer(isValidHalfBack.bind("", url, linksCtx.links));

  const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const isFormValid =
    !linkHasError &&
    !shortLinkHasError &&
    shortLinkVal &&
    linkVal &&
    shortLinkVal !== "" &&
    linkVal !== "";

  const handleOpenErrorModal = () => {
    setShowErrorModal(true);
  };

  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
  };

  const handleOpenSuccessModal = () => {
    setShowSuccessModal(true);
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (isFormValid) {
      linksCtx.addLink(linkVal, shortLinkVal);
      handleOpenSuccessModal();
      linkClearHandler();
      shortLinkClearHandler();
    } else {
      handleOpenErrorModal();
    }
  };

  const errorMsgList = (
    <ul>
      {(linkVal == "" || linkHasError) && (
        <li>Please provide a valid long link</li>
      )}
      {(shortLinkVal == "" || shortLinkHasError) && (
        <li>Please provide a valid back-half</li>
      )}
    </ul>
  );

  const successMsg = (
    <p>Your shortened link has been copied to the clipboard </p>
  );

  return (
    <>
      {showErrorModal && (
        <Modal
          message={errorMsgList}
          onCloseModal={handleCloseErrorModal}
          type={MODAL_TYPE.ERROR}
        />
      )}
      {showSuccessModal && (
        <Modal
          message={successMsg}
          onCloseModal={handleCloseSuccessModal}
          type={MODAL_TYPE.SUCCESS}
        />
      )}
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
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
          <section className={classes.shortlink}>
            <p className={classes.label}>Domain:</p>
            <img src={ArrowPNG} alt="Arrow convert" className={classes.arrow} />
            <img src={LinkPNG} alt="Link icon" className={classes.link} />
            <p className={classes["link-text"]}>{url}</p>

            <Input
              placeholder="example:my-link"
              type={INPUT_TYPE.TEXT}
              prefix=""
              errorMsg="Taken or not valid"
              label="Enter a back-half"
              value={shortLinkVal || ""}
              hasError={shortLinkHasError}
              blurHandler={shortLinkBlurHandler}
              changeHandler={shortLinkChangeHandler}
            />
          </section>
          <Button
            className={classes.actions}
            text="Shorten link"
            style={{ marginLeft: "1rem" }}
            type="submit"
            onClick={() => {
              console.log("JAJA");
            }}
          />
        
        </form>
      </Card>
    </>
  );
};

export default LinkShortener;
