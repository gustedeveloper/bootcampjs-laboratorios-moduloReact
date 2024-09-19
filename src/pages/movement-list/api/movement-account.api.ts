import { Account } from "./movement-account.api-model";
import Axios from "axios";

const urlAccounts = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getAccount = (accountId: string): Promise<Account> =>
  Axios.get<Account>(`${urlAccounts}/${accountId}`).then(({ data }) => data);
