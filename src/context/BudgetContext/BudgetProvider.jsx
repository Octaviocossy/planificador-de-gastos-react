import React, { useReducer } from 'react';
import BudgetContext from './budgetContext';
import budgetReducer from './budgetReducer';
import Types from '../../types/budgetTypes';

const BudgetProvider = ({ children }) => {
  const initialState = {
    initialAmount: 1000,
    expensesList: [
      {
        expense_name: 'Pagar Netflix',
        quantity: 199,
        expense_filter: 'gastos',
        id: 'gcsvgk0wvaky1ie30j',
        date: '05 de enero de 2022',
      },
      {
        expense_name: 'Test',
        quantity: 399,
        expense_filter: 'comida',
        id: 'gcsagk0wvaky1ie30j',
        date: '05 de enero de 2022',
      },
    ],
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
        expensesList: state.expensesList,
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
