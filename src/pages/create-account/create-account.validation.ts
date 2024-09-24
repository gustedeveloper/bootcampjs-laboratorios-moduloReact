import { FormValidationResult } from "@/common/validations";
import { CreateAccountError } from "./create-account.vm";
import {
  validateAccountAlias,
  validateAccountType,
} from "./create-account-field.validation";

export const validateForm = (
  createAccount: CreateAccountError
): FormValidationResult<CreateAccountError> => {
  const fieldValidationResults = [
    validateAccountType(createAccount.type),
    validateAccountAlias(createAccount.name),
  ];

  return {
    succeeded: fieldValidationResults.every((f) => f.succeeded),
    errors: {
      type: fieldValidationResults[0].errorMessage ?? "",
      name: fieldValidationResults[1].errorMessage ?? "",
    },
  };
};
