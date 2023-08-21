import React from "react";
import classes from "./Card.module.css";

const Card: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <article
      className={classes.card}
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      {children}
    </article>
  );
};

export default Card;
