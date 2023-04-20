import React from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) =>
{
    return(
        <Card className='expenses'> {/* here card for outer card shadow*/}

            {props.item.map( expense =>(   //looping on array bcz if we add from form then it will automatic gets add
              <ExpenseItem 
              date={expense.date}  
              title={expense.title}
              amount={expense.amount}>
             </ExpenseItem>
            ) )}

            {/* <ExpenseItem 
             date={props.item[0].date}  
             title={props.item[0].title}
             amount={props.item[0].amount}>
            </ExpenseItem>                    //calling subomponent2 in subcomponent1 
            <ExpenseItem 
              date={props.item[1].date}  
              title={props.item[1].title}
              amount={props.item[1].amount}/>
            
            <ExpenseItem 
              date={props.item[2].date}  
              title={props.item[2].title}
              amount={props.item[2].amount}/>
            
            <ExpenseItem 
              date={props.item[3].date}  
              title={props.item[3].title}
              amount={props.item[3].amount}/>*/}
        </Card>
        
    );
}
export default Expenses;