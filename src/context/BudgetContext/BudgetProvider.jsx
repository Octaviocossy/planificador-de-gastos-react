import React, { useReducer } from 'react';
import BudgetContext from './budgetContext';
import budgetReducer from './budgetReducer';
import Types from '../../types/budgetTypes';

const BudgetProvider = ({ children }) => {
  const initialState = {
    initialAmount: Number(localStorage.getItem('budget')) ?? 0,
    isValid: false,
  };
  const [state, dispatch] = useReducer(budgetReducer, initialState);
  const addBudget = (amount) => {
    dispatch({
      type: Types.ADD_BUDGET,
      payload: amount,
    });
  };
  const initialAmountLS = (amount) => {
    localStorage.setItem('budget', amount ?? 0);
  };
  const updateBudget = () => {
    dispatch({ type: Types.UPDATE_BUDGET });
  };
  const resetBudget = () => {
    localStorage.removeItem('expenses');
    localStorage.removeItem('budget');
  };
  return (
    <BudgetContext.Provider
      value={{
        initialAmount: state.initialAmount,
        isValid: state.isValid,
        initialAmountLS,
        updateBudget,
        resetBudget,
        addBudget,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

export default BudgetProvider;
