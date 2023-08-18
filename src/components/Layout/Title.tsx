import React from "react";
import classes from "./Title.module.css";
import ClickImg from "../../assets/click.png";

const Title: React.FC = () => {
  return (
    <article className={classes["large-title"]}>
      <h1>
        Wanna go <span>straight forward ?</span>
      </h1>
      <p>
        Just type in your long link and a short one and, if available, you're
        done!
      </p>
      <img src={ClickImg} draggable={false} alt="Click pixel illustration" />
    </article>
  );
};

export default Title;
