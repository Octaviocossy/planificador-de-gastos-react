import React, { useContext } from 'react';
import ExpenseContext from '../../context/ExpenseContext/expenseContext';
import Expense from '../Expense/Expense';

const ExpensesList = () => {
  const { expensesList } = useContext(ExpenseContext);
  return (
    <>
      {expensesList.map((expense) => (
        <Expense key={expense.id} expense={expense} />
      ))}
    </>
  );
};

export default ExpensesList;
