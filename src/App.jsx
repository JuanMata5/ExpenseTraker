import { GlobalProvider } from "./context/GlobalState";
import Balance from "./components/Balance";
import TransactionForm from "./components/Transactions/TransactionForm";
import TransactionList from "./components/Transactions/TransactionList";
import IncomeExpenses from "./components/IncomeExpenses";


function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-900 text-white h-screen flex justify-center items-center ">
        <div className="container mx-auto xl:w-2/5 max-sm:p-5 md:w-3/4 ">

          <div className=" bg-zinc-800 p-10 rounded-lg flex flex-wrap  justify-between gap-x-10">

            <div className="w-full">
              <h1 className="text-3xl font-bold">Expense Tracker</h1>
      
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>

            <div className=" overflow-auto">
              <TransactionList />
            </div>

          </div>
          
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
