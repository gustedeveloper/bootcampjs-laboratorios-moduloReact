import React from "react";
import classes from "./movement-list-account-info.component.module.css";
export const MovementListAccountInfoComponent: React.FC = () => {
  return (
    <div className={classes.infoContainer}>
      <span>Alias: Gastos mes</span>
      <span>IBAN: ES91 2100 0418 4502 0005 1332</span>
    </div>
  );
};
