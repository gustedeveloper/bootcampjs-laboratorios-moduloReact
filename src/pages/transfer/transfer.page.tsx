import React from "react";
import { AppLayout } from "@/layouts";
import { AccountVM, TransferVM } from "./transfer.vm";
import { TransferFormComponent } from "./components";
import classes from "./transfer.page.module.css";
import { getAccountList, saveTransfer } from "./api";
import {
  mapAccountFromApiToVm,
  mapTransferFromVmToApi,
} from "./transfer.mapper";

export const TransferPage: React.FC = () => {
  const [accountList, setAccountList] = React.useState<AccountVM[]>([]);

  React.useEffect(() => {
    getAccountList().then((result) => {
      const accountListVM = result.map(mapAccountFromApiToVm);
      setAccountList(accountListVM);
    });
  }, []);

  const handleTransfer = (transferInfo: TransferVM) => {
    const transfer = mapTransferFromVmToApi(transferInfo);
    saveTransfer(transfer).then((result) => {
      if (result) {
        alert("Transferencia realizada con éxito");
      } else {
        alert("Error al realizar la transferencia");
      }
    });
  };

  return (
    <AppLayout>
      <div className={classes.container}>
        <h1 className={classes.title}>Transferencias Nacionales</h1>
        <TransferFormComponent
          accountList={accountList}
          onTransfer={handleTransfer}
        />
      </div>
    </AppLayout>
  );
};
