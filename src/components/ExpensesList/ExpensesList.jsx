import React, { useContext, useEffect } from 'react';
import ExpenseContext from '../../context/ExpenseContext/expenseContext';
import Expense from '../Expense/Expense';
import AlertContext from '../../context/AlertContext/alertContext';

const ExpensesList = () => {
  const { expensesList, filter, expensesFiltered } = useContext(ExpenseContext);
  const { alertFunction } = useContext(AlertContext);
  useEffect(() => {
    if (filter && !expensesFiltered[0]) {
      alertFunction('No hay gastos aún', 'gold');
    }
  }, [filter]);
  return (
    <div>
      {filter
        ? expensesFiltered.map((expense) => (
            <Expense key={expense.id} expense={expense} />
          ))
        : expensesList.map((expense) => (
            <Expense key={expense.id} expense={expense} />
          ))}
    </div>
  );
};

export default ExpensesList;
