import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

//Custom components cannot work as wrappers out of the box.  They need to be configured to do so.
//See Card.js for the configuration.  
function ExpenseItem(props) {
  return (
    // Custom components only support what you explicitly configure them to support.
    // If you want to make sure that the className can be set and have an effect, you need to configure the custom component to support the className property.
    // See Card.js for the configuration.
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
