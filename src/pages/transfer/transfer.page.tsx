import React from "react";
import { AppLayout } from "@/layouts";
import { AccountVM, TransferVM } from "./transfer.vm";
import { TransferFormComponent } from "./components";

const accountListMock: AccountVM[] = [
  { id: "1", alias: "Cuenta principal", iban: "ES91 2100 0418 4502 0005 1332" },
  { id: "2", alias: "Cuenta ahorro", iban: "ES91 2100 0418 4502 0005 1332" },
  { id: "3", alias: "Cuenta nómina", iban: "ES91 2100 0418 4502 0005 1332" },
];

export const TransferPage: React.FC = () => {
  const [accountList, setAccountList] = React.useState<AccountVM[]>([]);

  React.useEffect(() => {
    setAccountList(accountListMock);
  }, []);

  const handleTransfer = (transferInfo: TransferVM) => {
    console.log(transferInfo);
  };

  return (
    <AppLayout>
      <TransferFormComponent
        accountList={accountList}
        onTransfer={handleTransfer}
      />
    </AppLayout>
  );
};
