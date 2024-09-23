import React from "react";
import classes from "../account-list.page.module.css";
import { Link } from "react-router-dom";
import { appRoutes } from "@/core/router";

export const AccountListHeaderComponent: React.FC = () => {
  return (
    <div className={classes.headerContainer}>
      <h1>Mis cuentas</h1>
      <button>
        <Link to={appRoutes.createAccount}>AGREGAR NUEVA CUENTA</Link>
      </button>
    </div>
  );
};
