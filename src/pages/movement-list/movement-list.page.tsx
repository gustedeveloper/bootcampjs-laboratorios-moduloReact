import { AppLayout } from "@/layouts";
import React from "react";
import { MovementVM } from "./movement-list.vm";

const mockMovementListData: MovementVM[] = [
  {
    id: "1",
    description: "Nómina noviembre",
    amount: "900",
    balance: "1490",
    transaction: new Date("2019-12-09T21:30:00"),
    realTransaction: new Date("2019-12-09T21:30:00"),
    accountId: "1",
  },
  {
    id: "2",
    description: "Alquiler noviembre",
    amount: "-400",
    balance: "590",
    transaction: new Date("2019-12-07T11:30:00"),
    realTransaction: new Date("2019-12-08T20:00:10"),
    accountId: "1",
  },
  {
    id: "3",
    description: "Gastos móvil",
    amount: "-24",
    balance: "990",
    transaction: new Date("2019-12-01T07:01:00"),
    realTransaction: new Date("2019-12-02T12:00:10"),
    accountId: "1",
  },
];

export const MovementListPage: React.FC = () => {
  const [movementList /*setMovementList*/] =
    React.useState<MovementVM[]>(mockMovementListData);

  return (
    <AppLayout>
      <div>Movement List</div>
      {movementList.map((movement) => (
        <div key={movement.id}>
          {movement.amount} - {movement.description}
        </div>
      ))}
    </AppLayout>
  );
};
