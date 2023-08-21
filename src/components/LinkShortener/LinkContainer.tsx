import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./LinkContainer.module.css";
import ConfirmImg from "../../assets/confirm.svg";
import CopyImg from "../../assets/copy.svg";
import Modal from "../UI/Modal";
import { MODAL_TYPE } from "../UI/Modal";

const LinkContainer: React.FC<{ link: string }> = ({ link }) => {
  const [showCopiedModal, setShowSuccessModal] = useState<boolean>(false);
  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  }

  const handleCopyToClipBoard = ()=>{
    setShowSuccessModal(true);
    // TODO:Create a utils function to copy to clipboard
  }

  const copiedMsg  = (
    <p>Your link has been copied to the clipboard </p>
  );

  return (
    <>
      {showCopiedModal && (
        <Modal
          message={copiedMsg}
          onCloseModal={handleCloseSuccessModal}
          type={MODAL_TYPE.SUCCESS}
        />
      )}
      <Card>
        <article className={classes.link}>
          <img src={ConfirmImg} draggable={false} />
          <input value={link} disabled={true} />
          <button className={classes.button} onClick={handleCopyToClipBoard}>
            <img src={CopyImg} />
          </button>
        </article>
      </Card>
    </>
  );
};

export default LinkContainer;
