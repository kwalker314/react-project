import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './ExpenseItemSet.css';

function ExpenseItemSet(props) {
  const expenses = props.set;
  const [selectedYear, setSelectedYear] = useState(2019);

  const selectYearHandler = selectedYear => {
    setSelectedYear(selectedYear);
  };
  return (
    <div>
      <ExpensesFilter onYearSelect={selectYearHandler} />
      <Card className="expenses">
        {expenses
          .filter(
            expense => expense.date.getFullYear() === parseInt(selectedYear)
          )
          .map(expense => (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </Card>
    </div>
  );
}

export default ExpenseItemSet;
