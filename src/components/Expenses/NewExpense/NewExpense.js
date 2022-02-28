import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
	const submitExpenseDataHandler = (submittedExpense) => {
		const expenseData = {
			...submittedExpense,
			id: Math.random().toString(),
		};
		props.onSubmitNewExpense(expenseData);
	};

	let [addExpenseFormExpanded, toggleForm] = useState(false);

	const collapseForm = () => {
		toggleForm(false);
	};

	const expandForm = () => {
		toggleForm(true);
	};

	return (
		<div className="new-expense">
			{addExpenseFormExpanded ? (
				<ExpenseForm
					onSubmitExpenseData={submitExpenseDataHandler}
					onCancelClick={collapseForm}
				/>
			) : (
				<button onClick={expandForm}>Add New Expense</button>
			)}
		</div>
	);
};

export default NewExpense;
