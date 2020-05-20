import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import ExpenseTransactions from './ExpenseTransactions';

const ExpensesList = () => {
  const { expenseTransactions } = useContext(GlobalContext);
  return (
    <div className='transactions transactions-expense'>
      <h2>Transcation History</h2>
      <ul className='transaction-list'>
        {expenseTransactions.map((expenseTranscation) => (
          <ExpenseTransactions
            key={expenseTranscation.id}
            transaction={expenseTranscation}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
