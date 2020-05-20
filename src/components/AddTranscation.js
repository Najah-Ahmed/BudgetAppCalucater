import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { GlobalContext } from '../context/GlobalState';

//import PropTypes from 'prop-types'

const AddTranscation = () => {
  const { addIcome, addExpense } = useContext(GlobalContext);
  const [income, setIncome] = useState({
    incomeText: '',
    incomeAmount: 0,
  });
  const { incomeAmount, incomeText } = income;
  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
    //console.log(income);
  };
  const onSubmitIncome = (e) => {
    e.preventDefault();
    if (incomeText !== '') {
      const newIcomeTrans = {
        id: uuidv4(),
        incomeText,
        incomeAmount: incomeAmount * 1,
      };
      addIcome(newIcomeTrans);
      setIncome({
        incomeText: '',
        incomeAmount: 0,
      });
    }
  };

  const [expense, setExpense] = useState({
    expenseText: '',
    expenseAmount: 0,
  });
  const { expenseAmount, expenseText } = expense;
  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
    //console.log(income);
  };
  const onSubmitExpense = (e) => {
    e.preventDefault();
    if (expenseText !== '') {
      const newExpenseTrans = {
        id: uuidv4(),
        expenseText,
        expenseAmount: expenseAmount * 1,
      };
      addExpense(newExpenseTrans);
      setExpense({
        expenseText: '',
        expenseAmount: 0,
      });
    }
  };

  return (
    <div className='form-wrapper'>
      <form onSubmit={onSubmitIncome}>
        <div className='input-group income'>
          <input
            type='text'
            name='incomeText'
            value={incomeText}
            placeholder='Add Income....'
            autoComplete='off'
            onChange={onChangeIncome}
          />
          <input
            type='number'
            name='incomeAmount'
            value={incomeAmount}
            placeholder='Amount'
            autoComplete='off'
            onChange={onChangeIncome}
          />
          <input type='submit' value='Submit' />
        </div>
      </form>
      <form onSubmit={onSubmitExpense}>
        <div className='input-group expense'>
          <input
            type='text'
            name='expenseText'
            value={expenseText}
            placeholder='Add Expenses....'
            autoComplete='off'
            onChange={onChangeExpense}
          />
          <input
            type='number'
            name='expenseAmount'
            value={expenseAmount}
            placeholder='Amount'
            autoComplete='off'
            onChange={onChangeExpense}
          />
          <input type='submit' value='Submit' />
        </div>
      </form>
    </div>
  );
};

// AddTranscation.propTypes = {

// }

export default AddTranscation;
