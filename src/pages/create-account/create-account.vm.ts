export interface Account {
  type: string;
  name: string;
}

export const accountMock: Account[] = [
  {
    type: "1",
    name: "Cuenta Corriente",
  },
  {
    type: "2",
    name: "Cuenta de Ahorro",
  },
  {
    type: "3",
    name: "Cuenta de Nómina",
  },
];
