import { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import './ExpenseItem.css';

function ExpenseItem(props) {
  // This one is one of React Hook
  const [title, setTitle] = useState(props.title)
  
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount} บาท</div>
      </div>
      <button onClick={clickHandler}>เปลี่ยนชื่อรายการ</button>
    </Card>
  );
}

export default ExpenseItem;
