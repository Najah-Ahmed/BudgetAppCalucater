import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import AddTranscation from './components/AddTranscation';
import IncomeList from './components/IncomeList';
import ExpensesList from './components/ExpensesList';
import { GlobalContextProvider } from './context/GlobalState';

const App = () => {
  return (
    <GlobalContextProvider>
      <div className='container'>
        <div className='app-wrapper'>
          <Header />
          <Balance />
          <AddTranscation />
          <IncomeList />
          <ExpensesList />
        </div>
      </div>
    </GlobalContextProvider>
  );
};

export default App;
