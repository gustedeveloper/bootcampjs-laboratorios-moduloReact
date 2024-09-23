import React from "react";
import classes from "./create-account.form.component.module.css";

export const CreateAccountFormComponent: React.FC = () => {
  return (
    <div>
      <form>
        <div className={classes.formContainer}>
          <div>
            <label>Tipo de cuenta:</label>
            <select name="accountId" className={classes.medium}>
              <option value="">Seleccionar</option>
            </select>
          </div>
          <div>
            <label>Alias:</label>
            <input name="name" className={classes.medium} />
          </div>
        </div>
        <div>
          <button className={classes.button}>GUARDAR</button>
        </div>
      </form>
    </div>
  );
};
