import React, { useState } from 'react';
import ExpenseItemSet from './components/Expenses/ExpenseItemSet';
import NewExpense from './components/Expenses/NewExpense/NewExpense';

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const newExpenseHandler = newExpenseData => {
    console.log(newExpenseData);
    setExpenses([...expenses, newExpenseData]);
  };

  return (
    <div id="inner">
      <h1>Let's get started!</h1>
      <NewExpense onSubmitNewExpense={newExpenseHandler} />
      <ExpenseItemSet set={expenses}></ExpenseItemSet>
    </div>
  );
}

export default App;
