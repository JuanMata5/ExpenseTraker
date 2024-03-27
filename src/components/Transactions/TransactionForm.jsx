import React, { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

const TransactionForm = () => {
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState(""); // Estado para controlar el mensaje de error

  const onSubmit = (e) => {
    e.preventDefault();
    if (amount !== "" && amount !== 0) {
      addTransaction({
        id: window.crypto.randomUUID(),
        description,
        amount: +amount
      });
      console.log(amount, description);
      // Limpiar el formulario después de agregar la transacción
      setDescription("");
      setAmount("");
      // Limpiar el mensaje de error
      setError("");
    } else {
      // Establecer el mensaje de error
      setError("El valor de la cantidad no puede ser cero");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Escribe una descripcion"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
        />

        <input
          type="number"
          step="0.01"
          placeholder="0.00"
          value={amount}
          onChange={(e) => setAmount(+e.target.value)} // Convertir a número
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
        />

        {/* Mostrar el mensaje de error en rojo */}
        {error && <p className="text-red-600 pb-2">{error}</p>}

        <button
          className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full"
        >
          Añadir Transacción
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;