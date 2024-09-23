import {
  isDateAfterToday,
  isPositiveNumber,
  isStringValueInformed,
  isValidIban,
  isValueNotNullOrUndefined,
  isEmailWellFormed,
} from "@/common/validations";
import { FieldValidationResult } from "../transfer.vm";

export const REQUIRED_FIELD_MESSAGE = "Debe informar el campo";
export const INVALID_IBAN_MESSAGE = "El IBAN no está bien formado";
export const INVALID_AMOUNT_MESSAGE = "El importe debe ser mayor que 0";
export const INVALID_REAL_DATE_TRANSFER_MESSAGE =
  "La fecha de ejecución debe ser posterior a la actual";
export const INVALID_EMAIL_MESSAGE = "El email no está bien formado";

const buildValidationFailedResult = (errorMessage: string) => ({
  succeeded: false,
  errorMessage,
});

const buildValidationSucceededResult = () => ({
  succeeded: true,
});

const buildRequiredFieldValidationFailedResponse = () =>
  buildValidationFailedResult(REQUIRED_FIELD_MESSAGE);

export const validateIBANField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }
  if (!isValidIban(value)) {
    return buildValidationFailedResult(INVALID_IBAN_MESSAGE);
  }
  return buildValidationSucceededResult();
};

export const validateAccountIdField = (
  value: string
): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }
  return buildValidationSucceededResult();
};

export const validateNameField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }
  return buildValidationSucceededResult();
};

export const validateAmountField = (value: number): FieldValidationResult => {
  if (!isPositiveNumber(value)) {
    return buildValidationFailedResult(INVALID_AMOUNT_MESSAGE);
  }
  return buildValidationSucceededResult();
};

export const validateConceptField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }
  return buildValidationSucceededResult();
};

export const validateNotesField = (_: string): FieldValidationResult =>
  buildValidationSucceededResult();

export const validateRealDateTransferField = (
  value?: Date
): FieldValidationResult => {
  if (!isValueNotNullOrUndefined(value)) {
    return buildValidationSucceededResult();
  }
  if (value && !isDateAfterToday(value)) {
    return buildValidationFailedResult(INVALID_REAL_DATE_TRANSFER_MESSAGE);
  }
  return buildValidationSucceededResult();
};

export const validateEmailField = (value?: string): FieldValidationResult => {
  if (!isValueNotNullOrUndefined(value)) {
    return buildValidationSucceededResult();
  }
  if (value && !isEmailWellFormed(value)) {
    return buildValidationFailedResult(INVALID_EMAIL_MESSAGE);
  }
  return buildValidationSucceededResult();
};
