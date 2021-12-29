import React from 'react';
import Header from './components/Header/Header';
import NewBudget from './components/NewBudget/NewBudget';
import BudgetProvider from './context/BudgetContext/BudgetProvider';
import AlertProvider from './context/AlertContext/AlertProvider';

const App = () => (
  <BudgetProvider>
    <AlertProvider>
      <div className="main">
        <Header />
        <NewBudget />
      </div>
    </AlertProvider>
  </BudgetProvider>
);

export default App;
