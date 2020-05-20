import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeTransactions = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const deleted = () => {
    deleteTransaction(transaction.id);
  };
  return (
    <li className='transaction'>
      <span className='transaction-text'>{transaction.incomeText}</span>
      <span className='transaction-amount'>${transaction.incomeAmount}</span>
      <button className='delete-btn ' onClick={deleted}>
        <i className='fas fa-trash'></i>
      </button>
    </li>
  );
};

export default IncomeTransactions;
