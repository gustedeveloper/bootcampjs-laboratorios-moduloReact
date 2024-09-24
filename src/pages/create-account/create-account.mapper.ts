import * as apiModel from "./api";
import * as viewModel from "./create-account.vm";

export const mapCreateAccountFromVmToApi = (
  account: viewModel.Account
): apiModel.CreateAccount => ({
  type: account.type,
  name: account.name,
});
