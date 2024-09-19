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

const mockMovementListData: MovementVM[] = [
  {
    id: "1",
    description: "Nómina noviembre",
    amount: "900",
    balance: "1490",
    transaction: new Date("2019-12-09T21:30:00"),
    realTransaction: new Date("2019-12-09T21:30:00"),
    accountId: "1",
  },
  {
    id: "2",
    description: "Alquiler noviembre",
    amount: "-400",
    balance: "590",
    transaction: new Date("2019-12-07T11:30:00"),
    realTransaction: new Date("2019-12-08T20:00:10"),
    accountId: "1",
  },
  {
    id: "3",
    description: "Gastos móvil",
    amount: "-24",
    balance: "990",
    transaction: new Date("2019-12-01T07:01:00"),
    realTransaction: new Date("2019-12-02T12:00:10"),
    accountId: "1",
  },
];

export const MovementListPage: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const accountId = pathname[pathname.length - 1];

  const [movementList /*setMovementList*/] =
    React.useState<MovementVM[]>(mockMovementListData);

  const [account, setAccount] = React.useState<Account>(createEmptyAccount());

  React.useEffect(() => {
    getAccount(accountId).then((data) => setAccount(data));
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
