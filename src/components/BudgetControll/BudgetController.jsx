import React, { useContext } from 'react';
import BudgetContext from '../../context/BudgetContext/budgetContext';
import { quantityFormatting } from '../../Helper';
import addSpendingIcon from '../../img/nuevo-gasto.svg';
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
            <span>Presupuesto:</span> {quantityFormatting(initialAmount)}
          </p>
          <p>
            <span>Disponible:</span> {quantityFormatting(initialAmount)}
          </p>
          <p>
            <span>Gastado:</span> {quantityFormatting(initialAmount)}
          </p>
        </div>
      </div>
      {!modal && (
        <div className="controller__seconddiv">
          <img
            className="controller__seconddiv--img"
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
