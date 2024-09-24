import React from "react";
import { Account, accountMock } from "../create-account.vm";
import classes from "./create-account.form.component.module.css";

export const CreateAccountFormComponent: React.FC = () => {
  const [account, setAccount] = React.useState<Account[]>([]);
  React.useEffect(() => {
    setAccount(accountMock);
  }, []);

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
          </div>
          <div>
            <label>Alias:</label>
            <input
              name="name"
              onChange={handleFieldChange}
              className={classes.medium}
            />
          </div>
        </div>
        <div>
          <button className={classes.button}>GUARDAR</button>
        </div>
      </form>
    </div>
  );
};
