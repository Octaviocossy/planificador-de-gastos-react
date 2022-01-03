import React, { useReducer } from 'react';
import BudgetContext from './budgetContext';
import budgetReducer from './budgetReducer';
import Types from '../../types/budgetTypes';

const BudgetProvider = ({ children }) => {
  const initialState = {
    initialAmount: 0,
    isValid: false,
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
  return (
    <BudgetContext.Provider
      value={{
        initialAmount: state.initialAmount,
        isValid: state.isValid,
        modal: state.modal,
        addBudget,
        handleModal,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

export default BudgetProvider;
