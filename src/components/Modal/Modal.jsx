import React, { useState, useContext } from 'react';
import BudgetContext from '../../context/BudgetContext/budgetContext';
import AlertContext from '../../context/AlertContext/alertContext';
import button from '../../img/close.png';
import { randomID } from '../../Helper';
import './index.scss';

const Modal = () => {
  const { handleModal, addExpense } = useContext(BudgetContext);
  const { showAlert, hideAlert, changeAnimation } = useContext(AlertContext);
  const [expense, setExpense] = useState({
    expense_name: '',
    quantity: 0,
    expense_filter: '',
  });
  const handleChange = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      [expense.expense_name, expense.quantity, expense.expense_filter].includes(
        ''
      )
    ) {
      showAlert('Todos los campos son obligatorios', 'red');
      changeAnimation(true);
      return;
    }
    changeAnimation(false);
    setTimeout(() => {
      hideAlert();
    }, 1000);
    expense.id = randomID();
    expense.quantity = Number(expense.quantity);
    addExpense(expense);
    handleModal();
  };
  return (
    <div className="modal">
      <div className="modal__div">
        <div className="modal__div--btn">
          <img src={button} alt="close btn" onClickCapture={handleModal} />
        </div>
        <h2 className="modal__div--h2">Nuevo Gasto</h2>
        <form className="modal__form" onSubmit={handleSubmit}>
          <label htmlFor="expense_name">
            Nombre Gasto
            <input
              type="text"
              className="modal__form--input"
              placeholder="Añade un Nombre de Gasto"
              name="expense_name"
              id="expense_name"
              autoComplete="off"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="quantity">
            Cantidad
            <input
              type="number"
              className="modal__form--input"
              placeholder="Añade la cantidad del gasto: ej. 250"
              name="quantity"
              id="quantity"
              autoComplete="off"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="expense_filter">
            Filtrar Gasto
            <select
              className="modal__form--input"
              id="expense_filter"
              name="expense_filter"
              onChange={handleChange}
            >
              <option value=""> --- </option>
              <option value="ahorro">Ahorro</option>
              <option value="comida">Comida</option>
              <option value="casa">Casa</option>
              <option value="gastos">Gastos Varios</option>
              <option value="ocio">Ocio</option>
              <option value="salud">Salud</option>
              <option value="suscripciones">Suscripciones</option>
            </select>
          </label>
          <input type="submit" value="Añadir" className="modal__form--submit" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
