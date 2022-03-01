import React, { useState } from "react";
import { Expense } from "../Expense";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props: { onSubmitNewExpense: Function }) => {
	let [addExpenseFormExpanded, toggleForm] = useState(false);

	const collapseForm = () => {
		toggleForm(false);
	};

	const expandForm = () => {
		toggleForm(true);
	};

	const submitExpenseDataHandler = (submittedExpense: Expense) => {
		const expenseData = {
			...submittedExpense,
			id: Math.random().toString(),
		};
		props.onSubmitNewExpense(submittedExpense);
		collapseForm();
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
