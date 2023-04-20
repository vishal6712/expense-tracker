import React,{ useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) =>
{
    const [enteredTitle, setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value); //storing input in variable
    };
   
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) =>{ //when submit form do this
        event.preventDefault(); //prevents from reload after submit

        const expenseData={
            title:enteredTitle, //storing filled title in new variable
            amount:enteredAmount,
            date:new Date(enteredDate),
        }
        props.onSaveExpenseData(expenseData);//passing data to parent
        console.log(expenseData);

        setEnteredTitle(''); //making it null by using variable in input
        setEnteredAmount('');
        setEnteredDate('');
    };

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expensee__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="numbers" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;