import React from "react";
import { AccountVM, createEmptyTransferVm, TransferVM } from "../transfer.vm";

interface Props {
  accountList: AccountVM[];
  onTransfer: (transferInfo: TransferVM) => void;
}

export const TransferFormComponent: React.FC<Props> = (props) => {
  const { accountList, onTransfer } = props;
  const [transfer, setTransfer] = React.useState<TransferVM>(
    createEmptyTransferVm()
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onTransfer(transfer);
  };

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTransfer({ ...transfer, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Transfer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Seleccione cuenta origen</label>
          <select
            name="accountId"
            onChange={handleFieldChange}
            value={transfer.accountId}
          >
            {accountList.map((account) => (
              <option key={account.id} value={account.id}>
                {account.alias}
              </option>
            ))}
            <option value="">Seleccione una cuenta</option>
          </select>
        </div>
        <div>
          <label>Ingrese el IBAN de destino:</label>
          <input name="iban" onChange={handleFieldChange} />
        </div>
        <div>
          <label>Beneficiario:</label>
          <input name="name" onChange={handleFieldChange} />
        </div>
        <div>
          <label>Importe:</label>
          <input type="number" name="amount" onChange={handleFieldChange} />
        </div>
        <div>
          <label>Concepto:</label>
          <input name="concept" onChange={handleFieldChange} />
        </div>
        <div>
          <label>Observaciones:</label>
          <input name="notes" onChange={handleFieldChange} />
        </div>
        <div>
          <p>
            Para que la transferencia se realice en otra fecha diferente a la de
            hoy, por favor, indíquenos la fecha de ejecución:
          </p>
          <div>
            <label>Fecha de ejecución:</label>
            <input
              name="realDateTransfer"
              type="date"
              onChange={handleFieldChange}
            />
          </div>
        </div>
        <div>
          <p>Escriba una dirección de email para dar aviso al beneficiario:</p>
          <div>
            <label>Email del beneficiario:</label>
            <input name="email" onChange={handleFieldChange} />
          </div>
        </div>
        <button type="submit">REALIZAR LA TRANSFERENCIA</button>
      </form>
    </div>
  );
};
