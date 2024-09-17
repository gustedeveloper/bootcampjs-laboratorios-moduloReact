import React from "react";
import logoHeader from "/assets/logo_header_white.svg";
import classes from "./header.component.module.css";

export const HeaderComponent: React.FC = () => {
  return (
    <header className={classes.header}>
      <div>
        <img className={classes.headerLogo} src={logoHeader} />
        <div className={classes.user}>
          <p>Email placeholder</p>
        </div>
      </div>
    </header>
  );
};
