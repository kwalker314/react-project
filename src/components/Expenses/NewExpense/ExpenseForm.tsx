import React, { useState } from "react";
import { Expense } from "../Expense";
import "./ExpenseForm.css";

const ExpenseForm = (props: {
	onSubmitExpenseData: Function;
	onCancelClick: Function;
}) => {
	let [enteredTitle, setEnteredTitle] = useState("");
	let [enteredAmount, setEnteredAmount] = useState("");
	let [enteredDate, setEnteredDate] = useState("");

	const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEnteredTitle(event.target.value);
	};
	const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEnteredAmount(event.target.value);
	};
	const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEnteredDate(event.target.value);
	};

	const submitHandler = (event: { preventDefault: () => void }) => {
		event.preventDefault();

		props.onSubmitExpenseData({
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate),
			id: Math.random().toString(),
		});

		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate("");
	};

	const cancelHandler = () => {
		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate("");

		props.onCancelClick();
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						value={enteredAmount}
						type="number"
						min="0.01"
						step="0.01"
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						value={enteredDate}
						min="2019-01-01"
						max="2022-12-31"
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="reset" onClick={cancelHandler}>
					Cancel
				</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
