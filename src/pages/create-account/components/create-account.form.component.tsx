import React from "react";
import {
  Account,
  accountMock,
  CreateAccountError,
  createEmptyAccount,
  createEmptyCreateError,
} from "../create-account.vm";
import classes from "./create-account.form.component.module.css";
import { validateForm } from "../create-account.validation";

interface Props {
  onCreation: (accountInfo: Account) => void;
}

export const CreateAccountFormComponent: React.FC<Props> = (props) => {
  const { onCreation } = props;

  const [account, setAccount] = React.useState<Account[]>([]);

  const [create, setCreate] = React.useState<Account>(createEmptyAccount());

  const [errors, setErrors] = React.useState<CreateAccountError>(
    createEmptyCreateError
  );

  React.useEffect(() => {
    setAccount(accountMock);
  }, []);

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCreate({ ...create, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formValidationResult = validateForm(create);
    setErrors(formValidationResult.errors);
    if (formValidationResult.succeeded) {
      onCreation(create);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.formContainer}>
          <div>
            <label>Tipo de cuenta:</label>
            <select
              name="type"
              onChange={handleFieldChange}
              className={classes.medium}
            >
              <option value="">Seleccionar</option>
              {account.map((a) => (
                <option key={a.type} value={a.type}>
                  {a.name}
                </option>
              ))}
            </select>
            <p className={classes.error}>{errors.type}</p>
          </div>
          <div>
            <label>Alias:</label>
            <input
              name="name"
              onChange={handleFieldChange}
              className={classes.medium}
            />
            <p className={classes.error}>{errors.name}</p>
          </div>
        </div>
        <div>
          <button className={classes.button} type="submit">
            GUARDAR
          </button>
        </div>
      </form>
    </div>
  );
};
