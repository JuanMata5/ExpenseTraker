import { useGlobalState } from "../../context/GlobalState";
import { useState } from "react";
import '../../index.css' 

const TransactionList = () => {
  const { transactions, deleteTransaction } = useGlobalState();
  const [showNoTransactionsMessage, setShowNoTransactionsMessage] = useState(true);

  return (
    <>
      <h3 className="text-slate-300 text-xl font-bold w-full mb-2">Historial</h3>
      <ul className="transaction-list"> 
        {transactions.map((transaction) => (
          <li
            className="bg-zinc-600 text-white px-3 py-1 mb-2 rounded-lg
            flex justify-between items-center w-full"
            key={transaction.id}
          >
            <div className="justify-between w-[150px] flex">
              <p>{transaction.description}</p>
              <span>${transaction.amount}</span>
              <button
                onClick={() => {
                  deleteTransaction(transaction.id);
                }}
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
      {showNoTransactionsMessage && transactions.length === 0 && (
        <h2 className="flex justify-center items-center">Aún no hay transacciones</h2>
      )}
    </>
  );
};

export default TransactionList;