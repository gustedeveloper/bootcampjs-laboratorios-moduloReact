import React from "react";
import { AccountVM } from "../account-list.vm";
import classes from "./account-list-item.component.module.css";
import { generatePath, Link } from "react-router-dom";
import { appRoutes } from "@/core/router";

interface Props {
  accountItem: AccountVM;
}

export const AccountListItemComponent: React.FC<Props> = (props) => {
  const { accountItem } = props;

  return (
    <div className={classes.row}>
      <span className={`${classes.dataCell} ${classes.bold}`}>
        <Link to={generatePath(appRoutes.movements, { id: accountItem.id })}>
          {accountItem.iban}
        </Link>
      </span>
      <span className={classes.dataCell}>{accountItem.name}</span>
      <span className={`${classes.dataCell} ${classes.alignRight}`}>
        {accountItem.balance}
      </span>
      <span className={`${classes.dataCell} ${classes.alignRight}`}>
        {accountItem.lastTransaction.toLocaleDateString()}
      </span>
      <span className={`${classes.dataCell} ${classes.selectContainer}`}>
        <select className={classes.select}></select>
      </span>
    </div>
  );
};
