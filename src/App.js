import NewExpense from "./components/์NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

import './App.css';

function App() {
  const expenses = [
    { id: "e1", title: "ค่าไฟ", amount: 392.58, date: new Date(2022, 3, 6) },
    {
      id: "e2",
      title: "ค่างวดรถ Honda City RS",
      amount: 13122,
      date: new Date(2022, 3, 6),
    },
    {
      id: "e3",
      title: "ค่างวดรถ Fino",
      amount: 2200,
      date: new Date(2022, 3, 6),
    },
    {
      id: "e4",
      title: "ค่าบัตรเครดิตร",
      amount: 3200,
      date: new Date(2022, 3, 6),
    },
  ];

  return (
    <div>
      <h2 className="software-name">โปรแกรมติดตามค่าใช้จ่าย</h2>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
