import React from "react";
import { AccountVM } from "../account-list.vm";
import classes from "./account-list-item.component.module.css";

interface Props {
  accountItem: AccountVM;
}

export const AccountListItemComponent: React.FC<Props> = (props) => {
  const { accountItem } = props;

  return (
    <div className={classes.row}>
      <span className={classes.dataCell}>{accountItem.iban}</span>
      <span className={classes.dataCell}>{accountItem.name}</span>
      <span className={classes.dataCell}>{accountItem.balance}</span>
      <span className={classes.dataCell}>
        {accountItem.lastTransaction.toLocaleDateString()}
      </span>
      <span className={classes.dataCell}>
        <select></select>
      </span>
    </div>
  );
};
