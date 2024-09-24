import {
  buildRequiredFieldValidationFailedResponse,
  buildValidationSucceededResult,
  FieldValidationResult,
  isStringValueInformed,
} from "@/common/validations";

export const validateAccountType = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }
  return buildValidationSucceededResult();
};

export const validateAccountAlias = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }
  return buildValidationSucceededResult();
};
