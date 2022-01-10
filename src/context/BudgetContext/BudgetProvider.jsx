import React, { useReducer } from 'react';
import BudgetContext from './budgetContext';
import budgetReducer from './budgetReducer';
import Types from '../../types/budgetTypes';

const BudgetProvider = ({ children }) => {
  const initialState = {
    initialAmount: 29000,
    expensesList: [
      {
        expense_name: 'Crypto',
        quantity: 19500,
        expense_filter: 'ahorro',
        id: 'fzccqvwz8otky4efhza',
        date: '07 de enero de 2022',
      },
    ],
    totalSpensed: 0,
    available: 0,
    isValid: true,
    modalForm: false,
    modalOptions: false,
  };
  const [state, dispatch] = useReducer(budgetReducer, initialState);
  const addBudget = (amount) => {
    dispatch({
      type: Types.ADD_BUDGET,
      payload: amount,
    });
  };
  const handleModalForm = () => {
    dispatch({
      type: Types.HANDLE_MODAL_FORM,
    });
  };
  const handleModalOptions = () => {
    dispatch({
      type: Types.HANDLE_MODAL_OPTIONS,
    });
  };
  const addExpense = (expense) => {
    dispatch({ type: Types.ADD_EXPENSES, payload: expense });
  };
  const addSpensed = () => {
    dispatch({ type: Types.TOTAL_SPENSED });
  };
  const amountAvailable = () => {
    dispatch({ type: Types.AMOUNT_AVAILABLE });
  };
  return (
    <BudgetContext.Provider
      value={{
        initialAmount: state.initialAmount,
        expensesList: state.expensesList,
        totalSpensed: state.totalSpensed,
        modalOptions: state.modalOptions,
        available: state.available,
        modalForm: state.modalForm,
        isValid: state.isValid,
        addExpense,
        addBudget,
        handleModalForm,
        handleModalOptions,
        addSpensed,
        amountAvailable,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

export default BudgetProvider;
