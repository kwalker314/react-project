import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
	const [selectedYear, setSelectedYear] = useState(2020);

	const selectYearHandler = (selectedYear) => {
		setSelectedYear(selectedYear);
	};

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={selectedYear}
					onYearSelect={selectYearHandler}
				/>
				<ExpensesList
					items={props.items.filter(
						(expense) => expense.date.getFullYear() === parseInt(selectedYear)
					)}
				/>
			</Card>
		</div>
	);
};

export default Expenses;
