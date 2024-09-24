import { AppLayout } from "@/layouts";
import React from "react";
import classes from "./create-account.page.module.css";
import { CreateAccountFormComponent } from "./components";
import { Account } from "./create-account.vm";
import { mapCreateAccountFromVmToApi } from "./create-account.mapper";
import { saveAccount } from "./api";

export const CreateAccount: React.FC = () => {
  const handleAccountCreation = (accountInfo: Account) => {
    const createAccount = mapCreateAccountFromVmToApi(accountInfo);
    saveAccount(createAccount).then((result) => {
      if (result) {
        alert("Ha creado una nueva cuenta con éxito");
      } else {
        alert("Error al crear nueva cuenta");
      }
    });
  };

  return (
    <AppLayout>
      <div className={classes.container}>
        <h1 className={classes.title}>Cuenta Bancaria</h1>
        <CreateAccountFormComponent onCreation={handleAccountCreation} />
      </div>
    </AppLayout>
  );
};
