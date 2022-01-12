import React, { useReducer } from 'react';
import expenseReducer from './expenseReducer';
import ExpenseContext from './expenseContext';
import Types from '../../types/expenseTypes';

const ExpenseProvider = ({ children }) => {
  const initialState = {
    expensesList: [
      {
        expense_name: 'Crypto',
        quantity: 2800,
        expense_filter: 'ahorro',
        id: 'fzccqvwz8otky4efhza',
        date: '07 de enero de 2022',
      },
    ],
    totalSpensed: 0,
    available: 0,
    editExpense: null,
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
  return (
    <ExpenseContext.Provider
      value={{
        editExpenseState: state.editExpense,
        totalSpensed: state.totalSpensed,
        expensesList: state.expensesList,
        available: state.available,
        deleteEditExpense,
        amountAvailable,
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
