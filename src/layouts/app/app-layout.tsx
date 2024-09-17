import React from "react";
import { HeaderComponent, NavBarComponent } from "./components";

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <HeaderComponent />
      <NavBarComponent />
      {children}
      <h1>Aquí el footer</h1>
    </>
  );
};
