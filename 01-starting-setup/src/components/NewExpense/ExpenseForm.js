import React, { useState } from 'react';
import './ExpenseForm.css'
const ExpenseForm = () => {

    // State for title
    const [enteredTitle, steEnteredTitle] = useState('');

    function titleChangeHandler(event){
        steEnteredTitle(event.target.value);
    }

    // State for Amount
    const[enteredAmount, setEnteredAmount] = useState('');

    function amountChangeHandler(event){
        setEnteredAmount(event.target.value)
    }

    // State for date
    const[enteredDate, setEnteredDate] = useState('');

    function dateChangeHandler(event){
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefalut();
        
    };

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-01"/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;
