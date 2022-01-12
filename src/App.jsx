import React from 'react';
import Header from './components/Header/Header';
import BudgetProvider from './context/BudgetContext/BudgetProvider';
import ExpenseProvider from './context/ExpenseContext/ExpenseProvider';
import AlertProvider from './context/AlertContext/AlertProvider';
import ModalProvider from './context/ModalContext/ModalProvider';
import MainComponent from './components/MainComponent/MainComponent';

const App = () => (
  <BudgetProvider>
    <ExpenseProvider>
      <ModalProvider>
        <AlertProvider>
          <div className="main">
            <Header />
            <MainComponent />
          </div>
        </AlertProvider>
      </ModalProvider>
    </ExpenseProvider>
  </BudgetProvider>
);

export default App;
