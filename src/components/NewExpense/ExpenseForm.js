import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        

    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

    };

    //when a form contains a button of type submit, the form itself will emit an event
    //so we can add the onSubmit listener to the form
    //part of this default behavior, the page reloads when the form is submitted because the browser sends a request to the server
    //we can prevent this default behavior by adding the preventDefault() method
    
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        //using two way binding, we can reset the form after the user submits the form
        //we can use the value prop to set the value of the input field (see value={enteredTitle} in the xhmtl code)
        console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (

        

        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control"> 
                    <label>Title</label>
                    {/* value={enteredTitle} is how we use two way binding in a form
                    this allows us to change the value upon form submit
                    in this example, we are setting the form back to '' after submit */}
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control"> 
                    <label>Amount</label>
                    <input type="number" min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control"> 
                    <label>Date</label>
                    <input type="date" min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;