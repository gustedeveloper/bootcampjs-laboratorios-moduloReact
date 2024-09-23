import { AppLayout } from "@/layouts";
import React from "react";
import classes from "./create-account.page.module.css";

export const CreateAccount: React.FC = () => {
  return (
    <AppLayout>
      <div className={classes.container}>
        <h1 className={classes.title}>Cuenta Bancaria</h1>
      </div>
    </AppLayout>
  );
};
