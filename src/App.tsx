import { useState } from "react";
import { Expense } from "./components/Expenses/Expense";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

const INITIAL_EXPENSES: Expense[] = [
	{
		id: "e0",
		title: "Toilet Paper (pre-Covid)",
		amount: 994.12,
		date: new Date(2019, 9, 29),
	},
	{
		id: "e1",
		title: "Toilet Paper (Covid!!!)",
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{
		id: "e2",
		title: "New TV",
		amount: 799.49,
		date: new Date(2021, 2, 12),
	},
	{
		id: "e3",
		title: "Car Insurance",
		amount: 294.67,
		date: new Date(2021, 2, 27),
	},
	{
		id: "e4",
		title: "New Desk (Wooden)",
		amount: 450,
		date: new Date(2021, 5, 12),
	},
	{
		id: "e5",
		title: "New Desk (Steel)",
		amount: 460,
		date: new Date(2022, 3, 31),
	},
	{
		id: "e6",
		title: "New Desk (Gold)",
		amount: 470,
		date: new Date(2022, 5, 21),
	},
];

function App() {
	const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

	const addExpenseHandler = (newExpenseData: Expense) => {
		setExpenses((prevExpenses: Expense[]) => {
			return [newExpenseData, ...prevExpenses];
		});
	};

	return (
		<div id="inner">
			<h1>Let's get started!</h1>
			<NewExpense onSubmitNewExpense={addExpenseHandler} />
			<Expenses items={expenses}></Expenses>
		</div>
	);
}

export default App;
