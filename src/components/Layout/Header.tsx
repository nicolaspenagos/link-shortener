import React, { useContext } from "react";
import classes from "./Header.module.css";
import { LinksContext } from "../../store/links-context";
import { url } from "../LinkShortener/LinkShortener";
const Header: React.FC = () => {
  const mappedLinks= useContext(LinksContext).mappedLinks;
  
  return (
    <header className={classes.header}>
      <div></div>
      <nav>
        <h4>{url.replace('/','')}</h4>
        <h4>
          <span>
            {mappedLinks.size > 0 ? mappedLinks.size : "⏳"}
          </span>{" "}
          short links generated!
        </h4>
      </nav>
    </header>
  );
};

export default Header;
