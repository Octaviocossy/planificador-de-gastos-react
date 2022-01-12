import React, { useReducer } from 'react';
import BudgetContext from './budgetContext';
import budgetReducer from './budgetReducer';
import Types from '../../types/budgetTypes';

const BudgetProvider = ({ children }) => {
  const initialState = {
    initialAmount: 10000,
    isValid: true,
  };
  const [state, dispatch] = useReducer(budgetReducer, initialState);
  const addBudget = (amount) => {
    dispatch({
      type: Types.ADD_BUDGET,
      payload: amount,
    });
  };
  return (
    <BudgetContext.Provider
      value={{
        initialAmount: state.initialAmount,
        isValid: state.isValid,
        addBudget,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

export default BudgetProvider;
