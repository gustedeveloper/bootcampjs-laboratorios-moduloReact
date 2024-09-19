import { AppLayout } from "@/layouts";
import React from "react";
import { useLocation } from "react-router-dom";
import { MovementVM } from "./movement-list.vm";
import {
  MovementListAccountInfoComponent,
  MovementListHeaderComponent,
} from "./components";
import classes from "./movement-list.page.module.css";
import { Account, createEmptyAccount, getAccount } from "./api";
import { MovementListTableComponent } from "./components/movement-list-table.component";
import { getMovements } from "./api/movement-list.api";
import { mapMovementListFromApiToVm } from "./movement-list.mapper";

export const MovementListPage: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const accountId = pathname[pathname.length - 1];

  const [movementList, setMovementList] = React.useState<MovementVM[]>([]);

  const [account, setAccount] = React.useState<Account>(createEmptyAccount());

  React.useEffect(() => {
    getAccount(accountId).then((result) => setAccount(result));
  }, []);

  React.useEffect(() => {
    getMovements(accountId).then((result) =>
      setMovementList(mapMovementListFromApiToVm(result))
    );
  }, []);

  return (
    <AppLayout>
      <div className={classes.root}>
        <MovementListHeaderComponent account={account} />
        <MovementListAccountInfoComponent account={account} />
        <MovementListTableComponent
          movementList={movementList}
        ></MovementListTableComponent>
      </div>
    </AppLayout>
  );
};
