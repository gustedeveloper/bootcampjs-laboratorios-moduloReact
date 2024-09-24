import { AppLayout } from "@/layouts";
import React from "react";
import classes from "./create-account.page.module.css";
import { CreateAccountFormComponent } from "./components";
import { Account } from "./create-account.vm";

export const CreateAccount: React.FC = () => {
  const handleAccountCreation = (accountInfo: Account) => {
    console.log(accountInfo);
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
