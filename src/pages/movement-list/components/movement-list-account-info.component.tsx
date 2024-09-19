import React from "react";
import classes from "./movement-list-account-info.component.module.css";
import { Account } from "../api";

interface Props {
  account: Account;
}

export const MovementListAccountInfoComponent: React.FC<Props> = (props) => {
  const { account } = props;

  return (
    <div className={classes.infoContainer}>
      <span>Alias: {account.name}</span>
      <span>IBAN: {account.iban}</span>
    </div>
  );
};
