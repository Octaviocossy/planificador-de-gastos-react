import React, { useContext } from 'react';
import BudgetContext from '../../context/BudgetContext/budgetContext';
import NewBudget from '../NewBudget/NewBudget';
import BudgetController from '../BudgetControll/BudgetController';

const MainComponent = () => {
  const { isValid } = useContext(BudgetContext);
  return isValid ? <BudgetController /> : <NewBudget />;
};

export default MainComponent;
