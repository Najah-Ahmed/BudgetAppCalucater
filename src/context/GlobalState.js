import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';
const initialState = {
  incomeTransactions:
    JSON.parse(localStorage.getItem('incomeTransactions')) ||
    [
      // { id: 1, incomeText: 'car sold', incomeAmount: 1500 },
      // { id: 2, incomeText: 'salary', incomeAmount: 300 },
      // { id: 3, incomeText: 'Bonus', incomeAmount: 100 },
    ],
  expenseTransactions:
    JSON.parse(localStorage.getItem('expenseTransactions')) ||
    [
      // { id: 4, expenseText: 'Rent', expenseAmount: 250 },
      // { id: 5, expenseText: 'Grosharies', expenseAmount: 350 },
      // { id: 6, expenseText: 'School fees', expenseAmount: 150 },
    ],
};
export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  useEffect(() => {
    localStorage.setItem(
      'incomeTransactions',
      JSON.stringify(state.incomeTransactions)
    );
    localStorage.setItem(
      'expenseTransactions',
      JSON.stringify(state.expenseTransactions)
    );
  });
  const addIcome = (incomeTransaction) => {
    dispatch({
      type: 'ADD_INCOME',
      payload: incomeTransaction,
    });
  };
  const addExpense = (expenseTransaction) => {
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expenseTransaction,
    });
  };
  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANS',
      payload: id,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        addIcome,
        addExpense,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
