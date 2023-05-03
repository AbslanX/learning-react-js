import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
//the useState function allows us to define values as state where changes to these values should reflect in the component function being called again
import { useState } from "react";

const ExpenseItem = (props) => {
  //useState is an example of a react hook
  //react hooks all begin with use
  //they must be used directly in the component function

  //we have to assign an initial value to the state
  //we will use props.title as the initial value
  //the useState function returns an array with exactly two elements
  //the first element is the current state value
  //the second element is a function that allows us to update the state
  const [title, setTitle] = useState(props.title);

  // we pass the setTitle function to the onClick handler and pass to it the new value we want to assign to the state
  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
