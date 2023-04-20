import React,{useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) =>
{
    // const [newTitle, setNewTitle]= useState("");
    // // let title=props.title;  not work bcz we need to update using usestate
    // const [title, setTitle]=useState(props.title); //array destructuring usestate returns variable and function here getting title value from array object
    // const clickHandler = () =>
    // {
    //     setTitle(newTitle);//changing value of variable through function
    // }
    // const onChangeHandler = (event) =>
    // {
    //     setNewTitle(event.target.value);
    // }


    return(
        <Card className='expense-item'> {/*here card for inner item shadow*/}
       
            <ExpenseDate date={props.date}/>  {/*calling subcomponent3 in subcomponent2 (separate component for date)  nested component*/} 
            <div className="expense-item__description">
                <h2>{ props.title }</h2>  {/*not props.title bcz we are changing it */}
               <div className='expense-item__price'>RS.{ props.amount }</div>  {/* using data(Jsx) from subcomponent1 */}
            </div>
            {/* <input type="text" value={newTitle} onChange={onChangeHandler}/>
            <button onClick={clickHandler}>Change title</button> */} {/*for input learn only*/}
        
        </Card> /*main component for nested component */
    );
}
export default ExpenseItem;