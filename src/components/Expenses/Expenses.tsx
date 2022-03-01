import React, { useState } from "react";
import Card from "../UI/Card";
import { Expense } from "./Expense";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = (props: { items: Expense[] }) => {
	const [selectedYear, setSelectedYear] = useState(2020);

	const selectYearHandler = (selectedYear: number) => {
		setSelectedYear(selectedYear);
	};

	let filteredExpenses = props.items.filter(
		(expense) => expense.date.getFullYear() == selectedYear
	);

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={selectedYear}
					onYearSelect={selectYearHandler}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	);
};

export default Expenses;
