import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const ExpenseTransactions = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const deleted = () => {
    deleteTransaction(transaction.id);
  };
  return (
    <li className='transaction'>
      <span className='transaction-text'>{transaction.expenseText}</span>
      <span className='transaction-amount'>${transaction.expenseAmount}</span>
      <button className='delete-btn' onClick={deleted}>
        <i className='fas fa-trash'></i>
      </button>
    </li>
  );
};

export default ExpenseTransactions;
