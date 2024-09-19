export interface Account {
  id: string;
  iban: string;
  type: string;
  name: string;
  balance: string;
}

export const createEmptyAccount = (): Account => ({
  id: "",
  iban: "",
  type: "",
  name: "",
  balance: "",
});
