import React, { useState, useContext, useEffect } from 'react';
import BudgetContext from '../../context/BudgetContext/budgetContext';
import AlertContext from '../../context/AlertContext/alertContext';
import './index.scss';

const NewBudget = () => {
  const [amount, setAmount] = useState(0);
  const { addBudget, initialAmountLS, initialAmount } =
    useContext(BudgetContext);
  const { showAlert, hideAlert, changeAnimation } = useContext(AlertContext);
  const handleChange = (e) => {
    setAmount(Number(e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount <= 0) {
      showAlert('Presupuesto no válido', 'red');
      changeAnimation(true);
      return;
    }
    changeAnimation(false);
    setTimeout(() => {
      hideAlert();
    }, 1000);
    addBudget(amount);
    initialAmountLS(amount);
  };
  useEffect(() => {
    if (initialAmount > 0) addBudget(initialAmount);
  }, []);
  return (
    <form className="form__main" onSubmit={handleSubmit}>
      <div className="form__main--div">
        <label htmlFor="budget">
          Definir Presupuesto
          <input
            type="number"
            id="budget"
            onChange={handleChange}
            placeholder="Ej. 200"
          />
        </label>
      </div>
      <input type="submit" value="Añadir" className="form__main--submit" />
    </form>
  );
};

export default NewBudget;
