import React, {useState} from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

let DUMMY_Expense =[
    {
        id:'e1',
        title:'Rent',
        amount:4000,
        date:new Date(2023, 0,19), //object
    },
    {
        id:'e2',
        title:'LightBill',
        amount:800,
        date:new Date(2022, 0,3),
    },
    {
        id:'e3',
        title:'Books',
        amount:1500,
        date:new Date(2023, 2,10),
    },
    {
        id:'e4',
        title:'Laptop',
        amount:50000,
        date:new Date(2023, 1,13),
    },
];

const App = ()=>
{
    // let expenseDate = new Date(2023, 0, 19); //making date with date object
    // let expenseTitle = "Rent";
    // let expenseAmount = 4000;

    const [expenses,setExpenses]=useState(DUMMY_Expense);
    
    const addExpenseHandler=(expense)=>
    {
        const updatedExpense=[...expenses,expense];//making an array of combination old and new array
        setExpenses(updatedExpense);//setting values
    };


    return(
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses item={expenses}/>  {/* subcomponent */}
        </div>
    );
}
export default App;