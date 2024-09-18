import React from "react";
import { AccountVM } from "../account-list.vm";

interface Props {
  accountList: AccountVM[];
}

export const AccountListTableComponent: React.FC<Props> = (props) => {
  const { accountList } = props;

  return (
    <>
      {accountList.map((account) => (
        <div key={account.id}>
          {account.name} - {account.balance}
        </div>
      ))}
    </>
  );
};
