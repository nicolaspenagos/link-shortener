import React from "react";
import classes from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <div></div>
      <nav>
        <h4>URL shortener</h4>
        <h4>
          <span>134</span> short links generated!
        </h4>
      </nav>
    </header>
  );
};

export default Header;
