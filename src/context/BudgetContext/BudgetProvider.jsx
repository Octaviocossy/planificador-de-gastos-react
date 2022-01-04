import React, { useReducer } from 'react';
import BudgetContext from './budgetContext';
import budgetReducer from './budgetReducer';
import Types from '../../types/budgetTypes';

const BudgetProvider = ({ children }) => {
  const initialState = {
    initialAmount: 1000,
    expensesList: [],
    isValid: true,
    modal: false,
  };
  const [state, dispatch] = useReducer(budgetReducer, initialState);
  const addBudget = (amount) => {
    dispatch({
      type: Types.ADD_BUDGET,
      payload: amount,
    });
  };
  const handleModal = () => {
    dispatch({
      type: Types.HANDLE_MODAL,
    });
  };
  const addExpense = (expense) => {
    dispatch({ type: Types.ADD_EXPENSES, payload: expense });
  };
  return (
    <BudgetContext.Provider
      value={{
        initialAmount: state.initialAmount,
        isValid: state.isValid,
        modal: state.modal,
        addExpense,
        addBudget,
        handleModal,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

export default BudgetProvider;
