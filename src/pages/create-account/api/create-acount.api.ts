import Axios from "axios";
import { CreateAccount } from "./create-account.api-model";

const url = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const saveAccount = (account: CreateAccount): Promise<CreateAccount> =>
  Axios.post<CreateAccount>(url, account).then(({ data }) => data);
