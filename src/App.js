import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { Transaction } from './components/Transaction';
import { AddTransact } from './components/AddTransact';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <Transaction />
        <AddTransact />
      </div>
    </div>
  );
}

export default App;
