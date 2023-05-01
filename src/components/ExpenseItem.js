import './ExpenseItem.css';

//this props object is passed to the component by React from the parent component
//we can access the props object in the component by adding it as a parameter to the function
//we can then access the properties of the props object by using dot notation
function ExpenseItem(props) {
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 249.67;

    return (
        <div className='expense-item'>
        <div>{props.date.toISOString()}</div>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        </div>
    );
}

export default ExpenseItem;
