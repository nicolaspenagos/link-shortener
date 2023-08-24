import { useEffect, useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LinksContext } from "../../store/links-context";
import { parseUrlProtocol } from "../../utils/string-validators";
import classes from "./Redirect.module.css";
import Modal, { MODAL_TYPE } from "../UI/Modal";

const RedirectPage: React.FC = () => {
  const { backHalf } = useParams();
  const mappedLinks = useContext(LinksContext).mappedLinks;
  const navigator = useNavigate();
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const longLink = mappedLinks.get(backHalf || "");

    if (longLink) {
      window.location.assign(parseUrlProtocol(longLink));
    }
    setTimeout(() => {
      setShowModal(true);
    }, 3000);
    setTimeout(() => {
      navigator("/");
    }, 5500);
  }, [mappedLinks, backHalf, navigator]);

  return (
    <>
      {showModal && (
        <Modal
          type={MODAL_TYPE.ERROR}
          onCloseModal={handleCloseModal}
          message={<p>Your link has not been found</p>}
        />
      )}
      <main className={classes.main}>
        <article className={classes.redirect}>
          <h1>Redirecting</h1>
          <div>
            <div className={classes["lds-ellipsis"]}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default RedirectPage;
