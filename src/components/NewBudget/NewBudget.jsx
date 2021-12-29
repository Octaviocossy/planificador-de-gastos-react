import React, { useState, useContext } from 'react';
import BudgetContext from '../../context/BudgetContext/budgetContext';
import AlertContext from '../../context/AlertContext/alertContext';
import './index.scss';

const NewBudget = () => {
  const [amount, setAmount] = useState(0);
  const { addBudget } = useContext(BudgetContext);
  const { showAlert, hideAlert } = useContext(AlertContext);
  const handleChange = (e) => {
    setAmount(Number(e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount <= 0) {
      showAlert('Presupuesto no válido', 'red');
      return;
    }
    hideAlert();
    addBudget(amount);
  };
  return (
    <form className="form__main" onSubmit={handleSubmit}>
      <div className="form__main--div">
        <label htmlFor="budget">
          Definir Presupuesto
          <input type="number" id="budget" onChange={handleChange} />
        </label>
      </div>
      <input type="submit" value="Añadir" className="form__main--submit" />
    </form>
  );
};

export default NewBudget;
