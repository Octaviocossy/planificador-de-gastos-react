import React, { useContext } from 'react';
import BudgetContext from '../../context/BudgetContext/budgetContext';
import { quantityFormatting } from '../../Helper';
import './index.scss';

const BudgetController = () => {
  const { initialAmount } = useContext(BudgetContext);
  return (
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
  );
};

export default BudgetController;
