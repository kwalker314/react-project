import { Expense } from "./Expense";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props: { items: Expense[] }) => {
	if (props.items.length === 0) {
		return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
	} else {
		return (
			<ul className="expenses-list">
				{props.items.map((expense: Expense) => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))}
			</ul>
		);
	}
};

export default ExpensesList;