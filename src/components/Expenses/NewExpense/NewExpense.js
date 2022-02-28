import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
  const submitExpenseDataHandler = submittedExpense => {
    const expenseData = {
      ...submittedExpense,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onSubmitNewExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpenseData={submitExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
