import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import ErrorIcon from "../../assets/error.svg";
import SuccessIcon from "../../assets/success.svg";

type ModalObj = {
  message: React.ReactNode;
  style?: React.CSSProperties;
  onCloseModal: () => void;
  type: MODAL_TYPE;
};

export enum MODAL_TYPE {
  ERROR,
  SUCCESS,
}

const ModalOverlay: React.FC<ModalObj> = ({
  message,
  style,
  onCloseModal,
  type,
}) => {
  const [transparent, setTransparent] = useState<boolean>(false);

  const closeModal = useCallback(() => {
    setTransparent(false);
    setTimeout(() => {
      setTransparent(true);
    }, 1750);
    setTimeout(() => {
      onCloseModal();
    }, 2250);
  }, [onCloseModal]);

  useEffect(() => {
    closeModal();
  }, [closeModal]);

  const [icon, classMod] =
    type === MODAL_TYPE.ERROR
      ? [ErrorIcon, classes.error]
      : [SuccessIcon, classes.success];

  return (
    <>
      <div
        className={`${classes.modal} ${
          transparent ? "transparent" : ""
        } ${classMod}`}
        data-aos="fade-left"
        data-aos-duration="500"
        style={style}
      >
        <main className={classes.content}>
          <aside>
            <img src={icon} alt="Modal icon" />
          </aside>
          <article>{message}</article>
        </main>
      </div>
    </>
  );
};

const Modal: React.FC<ModalObj> = ({ message, style, onCloseModal, type }) => {
  const overlayRoot = document.getElementById("overlay-root");
  if (!overlayRoot) return <></>;

  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay
          message={message}
          style={style}
          onCloseModal={onCloseModal}
          type={type}
        />,
        overlayRoot
      )}
    </>
  );
};

export default Modal;
