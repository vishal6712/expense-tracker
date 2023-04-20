import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) =>
{
    const saveExpenseDataHandler = (enteredExpenseData) =>
    {
        const expenseData = {
            ...enteredExpenseData,//copying object values
            id:Math.random().toString(),
        };
        props.onAddExpense(expenseData);//sending to parent app.js
        console.log(expenseData);
    }

    return(
        <div className="new-expense">
            <ExpenseForm  onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );

}

export  default NewExpense;