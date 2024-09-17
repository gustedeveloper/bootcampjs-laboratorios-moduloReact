import React from "react";
import { Link, generatePath } from "react-router-dom";
import { appRoutes } from "@/core/router";
import { AppLayout } from "@/layouts";

export const AccountListPage: React.FC = () => {
  return (
    <AppLayout>
      <div>
        Account List
        <br />
        <Link to={generatePath(appRoutes.movements, { id: 1 })}>
          Movimientos de la cuenta 1
        </Link>
        <br />
        <Link to={appRoutes.transfer}>Transferencia</Link>
        <br />
        <Link to={generatePath(appRoutes.transferFromAccount, { id: 1 })}>
          Transferencia desde cuenta 1
        </Link>
        <br />
        <Link to={generatePath(appRoutes.editAccount, { id: 1 })}>
          Editar cuenta 1
        </Link>
      </div>
    </AppLayout>
  );
};
