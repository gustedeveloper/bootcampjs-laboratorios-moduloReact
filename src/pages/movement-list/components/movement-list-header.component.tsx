import React from "react";
import classes from "./movement-list-header.component.module.css";

export const MovementListHeaderComponent: React.FC = () => {
  return (
    <div className={classes.headerContainer}>
      <h1>Saldos y Últimos movimientos</h1>
      <div className={classes.balanceContainer}>
        <span>SALDO DISPONIBLE</span>
        <p className={classes.amount}>1490€</p>
      </div>
    </div>
  );
};
