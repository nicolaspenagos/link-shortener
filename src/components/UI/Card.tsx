import React from "react";
import classes from "./Card.module.css";

const Card: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <article className={classes.card}>{children}</article>;
};

export default Card;
