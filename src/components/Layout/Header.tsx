import React, { useContext } from "react";
import classes from "./Header.module.css";
import { LinksContext } from "../../store/links-context";
const Header: React.FC = () => {
  const linksCtx = useContext(LinksContext);

  return (
    <header className={classes.header}>
      <div></div>
      <nav>
        <h4>URL shortener</h4>
        <h4>
          <span>
            {linksCtx.links.length > 0 ? linksCtx.links.length : "⏳"}
          </span>{" "}
          short links generated!
        </h4>
      </nav>
    </header>
  );
};

export default Header;
