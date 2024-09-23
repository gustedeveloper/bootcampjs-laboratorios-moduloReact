import React from "react";
import { AccountVM, createEmptyTransferVm, TransferVM } from "../transfer.vm";

interface Props {
  accountList: AccountVM[];
  onTransfer: (transferInfo: TransferVM) => void;
}

export const TransferFormComponent: React.FC<Props> = (props) => {
  const { accountList, onTransfer } = props;
  const [transfer /*setTransfer*/] = React.useState<TransferVM>(
    createEmptyTransferVm()
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onTransfer(transfer);
  };

  return (
    <div>
      <h2>Transfer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Seleccione cuenta origen</label>
          <select>
            {accountList.map((account) => (
              <option key={account.id} value={account.id}>
                {account.alias}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Ingrese el IBAN de destino:</label>
          <input />
        </div>
        <div>
          <label>Beneficiario:</label>
          <input />
        </div>
        <div>
          <label>Importe:</label>
          <input type="number" />
        </div>
        <div>
          <label>Concepto:</label>
          <input name="concept" />
        </div>
        <div>
          <label>Observaciones:</label>
          <input name="notes" />
        </div>
        <div>
          <p>
            Para que la transferencia se realice en otra fecha diferente a la de
            hoy, por favor, indíquenos la fecha de ejecución:
          </p>
          <div>
            <label>Fecha de ejecución:</label>
            <input name="realDateTransfer" type="date" />
          </div>
        </div>
        <div>
          <p>Escriba una dirección de email para dar aviso al beneficiario:</p>
          <div>
            <label>Email del beneficiario:</label>
            <input name="email" />
          </div>
        </div>
        <button type="submit">REALIZAR LA TRANSFERENCIA</button>
      </form>
    </div>
  );
};
