import React, { useContext, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { quantityFormatter } from '../../Helper';
import addSpendingIcon from '../../img/nuevo-gasto.svg';
import ExpenseContext from '../../context/ExpenseContext/expenseContext';
import BudgetContext from '../../context/BudgetContext/budgetContext';
import ModalContext from '../../context/ModalContext/modalContext';
import ModalOptions from '../ModalOptions/ModalOptions';
import ExpensesList from '../ExpensesList/ExpensesList';
import ModalForm from '../ModalForm/ModalForm';
import 'react-circular-progressbar/dist/styles.css';
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
  } = useContext(ExpenseContext);
  const { initialAmount } = useContext(BudgetContext);
  const { handleModalForm, modalForm, modalOptions } = useContext(ModalContext);
  useEffect(() => {
    addSpensed();
    amountAvailable(initialAmount);
    percentageSpensed(initialAmount);
  }, [expensesList]);
  const handleForm = () => {
    deleteEditExpense();
    handleModalForm();
  };
  return (
    <>
      <div className="controller__div">
        <div className="controller__div--left">
          <CircularProgressbar
            styles={buildStyles({
              pathColor: '#66d2d6',
              textColor: '#66d2d6',
              textSize: '9px',
            })}
            text={`${percentage}% Gastado`}
            value={percentage}
          />
        </div>
        <div className="controller__div--right">
          <p>
            <span>Presupuesto:</span> {quantityFormatter(initialAmount)}
          </p>
          <p>
            <span>Disponible:</span> {quantityFormatter(available)}
          </p>
          <p>
            <span>Gastado:</span> {quantityFormatter(totalSpensed)}
          </p>
        </div>
      </div>
      <div className="controller__expensesDiv">
        <h2 className="controller__expensesDiv--h2">Gastos</h2>
        <ExpensesList />
      </div>
      {!modalForm && !modalOptions ? (
        <div className="controller__modalDiv">
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
