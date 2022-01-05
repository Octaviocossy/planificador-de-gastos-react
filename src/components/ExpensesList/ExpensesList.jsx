import React, { useContext } from 'react';
import BudgetContext from '../../context/BudgetContext/budgetContext';
import Expense from '../Expense/Expense';

const ExpensesList = () => {
  const { expensesList } = useContext(BudgetContext);
  return (
    <>
      {expensesList.map((expense) => (
        <Expense key={expense.id} expense={expense} />
      ))}
    </>
  );
};

export default ExpensesList;
