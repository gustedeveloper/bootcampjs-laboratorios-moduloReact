import React from "react";

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <h1>Aquí iría la cabecera</h1>
      {children}
      <h1>Aquí el footer</h1>
    </>
  );
};
