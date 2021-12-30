import React from 'react';
import Header from './components/Header/Header';
import BudgetProvider from './context/BudgetContext/BudgetProvider';
import AlertProvider from './context/AlertContext/AlertProvider';
import MainComponent from './components/MainComponent/MainComponent';

const App = () => (
  <BudgetProvider>
    <AlertProvider>
      <div>
        <Header />
        <MainComponent />
      </div>
    </AlertProvider>
  </BudgetProvider>
);

export default App;
