import React from "react";
import classes from "./movement-list-header.component.module.css";
import { Account } from "../api";

interface Props {
  account: Account;
}

export const MovementListHeaderComponent: React.FC<Props> = (props) => {
  const { account } = props;
  return (
    <div className={classes.headerContainer}>
      <h1>Saldos y Últimos movimientos</h1>
      <div className={classes.balanceContainer}>
        <span>SALDO DISPONIBLE</span>
        <p className={classes.amount}>{account.balance} €</p>
      </div>
    </div>
  );
};
