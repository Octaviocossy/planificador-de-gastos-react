import React, { useContext } from 'react';
import BudgetContext from '../../context/BudgetContext/budgetContext';
import { quantityFormatter } from '../../Helper';
import addSpendingIcon from '../../img/nuevo-gasto.svg';
import ExpensesList from '../ExpensesList/ExpensesList';
import Modal from '../Modal/Modal';
import './index.scss';

const BudgetController = () => {
  const { initialAmount, handleModal, modal } = useContext(BudgetContext);
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
            <span>Disponible:</span> {quantityFormatter(initialAmount)}
          </p>
          <p>
            <span>Gastado:</span> {quantityFormatter(initialAmount)}
          </p>
        </div>
      </div>
      <div className="controller__expensesDiv">
        <h2 className="controller__expensesDiv--h2">Gastos</h2>
        <ExpensesList />
      </div>
      {!modal && (
        <div className="controller__modalDiv">
          <img
            className="controller__modalDiv--img"
            src={addSpendingIcon}
            alt="new spending"
            onClickCapture={handleModal}
          />
        </div>
      )}
      {modal && <Modal />}
    </>
  );
};

export default BudgetController;
