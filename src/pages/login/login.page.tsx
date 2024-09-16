import React from "react";
import { appRoutes } from "@/core/router";
import { Link } from "react-router-dom";

export const LoginPage: React.FC = () => {
  return (
    <div>
      Login
      <br />
      <Link to={appRoutes.accountList}>Mis cuentas</Link>
    </div>
  );
};
