import React from "react";

export const LoginPage: React.FC = () => {
  return (
    <div>
      <h1>Acceso</h1>
      <form>
        <div>
          <label htmlFor="username">Usuario</label>
          <input type="text" id="username"></input>
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password"></input>
        </div>
        <button type="submit">Acceder</button>
      </form>
    </div>
  );
};
