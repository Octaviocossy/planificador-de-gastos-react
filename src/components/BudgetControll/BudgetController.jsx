import React, { useContext, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { quantityFormatter } from '../../Helper';
import addSpendingIcon from '../../img/nuevo-gasto.svg';
import ExpenseContext from '../../context/ExpenseContext/expenseContext';
import BudgetContext from '../../context/BudgetContext/budgetContext';
import ModalContext from '../../context/ModalContext/modalContext';
import AlertContext from '../../context/AlertContext/alertContext';
import ModalOptions from '../ModalOptions/ModalOptions';
import ExpensesList from '../ExpensesList/ExpensesList';
import 'react-circular-progressbar/dist/styles.css';
import ModalForm from '../ModalForm/ModalForm';
import Filter from '../Filter/Filter';
import './index.scss';

const BudgetController = () => {
  const {
    totalSpensed,
    expensesList,
    addSpensed,
    amountAvailable,
    available,
    deleteEditExpense,
    percentageSpensed,
    percentage,
    cleanExpenses,
  } = useContext(ExpenseContext);
  const { initialAmount, updateBudget, resetBudget } =
    useContext(BudgetContext);
  const { handleModalForm, modalForm, modalOptions } = useContext(ModalContext);
  const { hideAlert } = useContext(AlertContext);
  useEffect(() => {
    addSpensed();
    amountAvailable(initialAmount);
    percentageSpensed(initialAmount);
  }, [expensesList]);
  const handleForm = () => {
    deleteEditExpense();
    handleModalForm();
  };
  const resetApp = () => {
    updateBudget();
    cleanExpenses();
    resetBudget();
    hideAlert();
  };
  return (
    <>
      <div className="controller__div">
        <div className="controller__div--left">
          <CircularProgressbar
            styles={buildStyles({
              pathColor: percentage < 100 ? '#66d2d6' : '#e56997',
              textColor: percentage < 100 ? '#66d2d6' : '#e56997',
              textSize: '9px',
            })}
            text={`${percentage}% Gastado`}
            value={percentage}
          />
        </div>
        <div className="controller__div--right">
          <button
            type="button"
            className="controller__div--right__btn"
            onClick={resetApp}
          >
            Resetear Presupuesto
          </button>
          <p>
            <span>Presupuesto:</span> {quantityFormatter(initialAmount)}
          </p>
          <p
            className={
              available < 0 ? 'controller__div--right__available' : null
            }
          >
            <span>Disponible:</span> {quantityFormatter(available)}
          </p>
          <p>
            <span>Gastado:</span> {quantityFormatter(totalSpensed)}
          </p>
        </div>
      </div>
      {expensesList[0] && (
        <div className="controller__expensesDiv">
          <Filter />
          <h2 className="controller__expensesDiv--h2">Gastos</h2>
          <ExpensesList />
        </div>
      )}
      {!modalForm && !modalOptions ? (
        <div
          className={
            expensesList[0]
              ? 'controller__modalDiv'
              : 'controller__modalDiv--animated'
          }
        >
          <img
            className="controller__modalDiv--img"
            src={addSpendingIcon}
            alt="new spending"
            onClickCapture={handleForm}
          />
        </div>
      ) : null}
      {modalForm && <ModalForm />}
      {modalOptions && <ModalOptions />}
    </>
  );
};

export default BudgetController;
