import React, { useContext, useEffect } from 'react';
import BudgetContext from '../../context/BudgetContext/budgetContext';
import { quantityFormatter } from '../../Helper';
import addSpendingIcon from '../../img/nuevo-gasto.svg';
import ExpensesList from '../ExpensesList/ExpensesList';
import ModalForm from '../ModalForm/ModalForm';
import ModalOptions from '../ModalOptions/ModalOptions';
import './index.scss';

const BudgetController = () => {
  const {
    initialAmount,
    handleModalForm,
    modalForm,
    totalSpensed,
    expensesList,
    addSpensed,
    amountAvailable,
    available,
    modalOptions,
    deleteEditExpense,
  } = useContext(BudgetContext);
  useEffect(() => {
    addSpensed();
    amountAvailable();
  }, [expensesList]);
  const handleForm = () => {
    deleteEditExpense();
    handleModalForm();
  };
  return (
    <>
      <div className="controller__div">
        <div className="controller__div--left">
          <p>grafica</p>
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
