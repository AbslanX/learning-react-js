import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    //Instead of using three separate states to manage the user input
    //we can use one state and manage the user input using one object
    //Either approach is fine, and it is up to your preference

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (event) => {
        //setEnteredTitle(event.target.value);

        //When calling the setUserInput function, we need to pass the entire object
        //because we are replacing the entire state
        //If we don't pass the entire object, the other properties will be lost
        //...userInput is a spread operator that copies the properties of the userInput object
        //and adds them to the new object
        //We can then overwrite the enteredTitle property
    
        //If we are using this approach, it is our responsibility to make sure 
        //that we do not lose any data
        
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        });
    };

    const amountChangeHandler = (event) => {
        //setEnteredAmount(event.target.value);

        setUserInput({
            ...userInput,
            enteredAmount: event.target.value
        });
    };

    const dateChangeHandler = (event) => {
        //setEnteredDate(event.target.value);

        setUserInput({
            ...userInput,
            enteredDate: event.target.value
        });
    };

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control"> 
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control"> 
                    <label>Amount</label>
                    <input type="number" min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control"> 
                    <label>Date</label>
                    <input type="date" min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;