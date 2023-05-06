import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (event) => {
        //setEnteredTitle(event.target.value);
        
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });

        //whenever you update state and you depend on the previous state, you should use this syntax
        //this is because react schedules state updates and does not execute them immediately
        //therefore, if you schedule multiple state updates, you cannot guarantee that the previous state will be the same
        //this approach guarantees that the state snapshot will always be the latest one
        //keeping all scheduled state updates in mind
        
        //Important: Whenever you update state and you depend on the previous state, always use this syntax
        setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.target.value};
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