import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  //creating a function to pass data from child to parent
  //the value for the prop should be a function 
  //onSaveExpenseData is the prop name and saveExpenseDataHandler is the function name
  //by adding this prop to the child component, we can pass data from child to parent

  const saveExpenseDataHandler = (enteredExpenseData) => {  //enteredExpenseData is the data that we get from the child component
    const expenseData = {
      ...enteredExpenseData, //spread operator to add the new data to the existing data
      id: Math.random().toString() //generating a random id
    };

    //using this same pattern, we are passing  the expense up to the App.js component
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
 
export default NewExpense;
