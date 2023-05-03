import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

//Adding a button to demonstrate event handling
//The button will be used to change the title of the expense item
//On all built in html elements, we have access to all of the native dom events like onClick
//we can pass a function as a value to the onClick attribute
//note that we are not calling the function, we are just passing a reference to the function
//if we call the function, it will be executed immediately when the component is rendered
//we want to execute the function only when the button is clicked
//so we pass a reference to the function and define the function outside of the return statement
const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log("Clicked!!!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
