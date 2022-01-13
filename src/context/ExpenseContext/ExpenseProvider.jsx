import React, { useReducer } from 'react';
import expenseReducer from './expenseReducer';
import ExpenseContext from './expenseContext';
import Types from '../../types/expenseTypes';

const ExpenseProvider = ({ children }) => {
  const initialState = {
    expensesList: localStorage.getItem('expenses')
      ? JSON.parse(localStorage.getItem('expenses'))
      : [],
    totalSpensed: 0,
    available: 0,
    editExpense: null,
    percentage: 0,
  };
  const [state, dispatch] = useReducer(expenseReducer, initialState);
  const addExpense = (expense) => {
    dispatch({ type: Types.ADD_EXPENSES, payload: expense });
  };
  const editExpense = (expense) => {
    dispatch({ type: Types.EDIT_EXPENSE, payload: expense });
  };
  const deleteEditExpense = () => {
    dispatch({ type: Types.DELETE_EDIT_EXPENSE });
  };
  const updateExpense = (expense) => {
    dispatch({ type: Types.UPDATE_EXPENSE, payload: expense });
  };
  const addSpensed = () => {
    dispatch({ type: Types.TOTAL_SPENSED });
  };
  const amountAvailable = (amount) => {
    dispatch({ type: Types.AMOUNT_AVAILABLE, payload: amount });
  };
  const deleteExpense = () => {
    dispatch({ type: Types.DELETE_EXPENSE });
  };
  const percentageSpensed = (amount) => {
    dispatch({ type: Types.PERCENTAGE_SPENSED, payload: amount });
  };
  const saveExpenseLS = () => {
    localStorage.setItem('expenses', JSON.stringify(state.expensesList));
  };
  return (
    <ExpenseContext.Provider
      value={{
        editExpenseState: state.editExpense,
        totalSpensed: state.totalSpensed,
        expensesList: state.expensesList,
        percentage: state.percentage,
        available: state.available,
        percentageSpensed,
        deleteEditExpense,
        amountAvailable,
        deleteExpense,
        saveExpenseLS,
        updateExpense,
        editExpense,
        addExpense,
        addSpensed,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
export default ExpenseProvider;
