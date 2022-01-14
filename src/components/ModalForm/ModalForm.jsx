import React, { useState, useContext, useEffect } from 'react';
import ModalExpense from '../../context/ModalContext/modalContext';
import ExpenseContext from '../../context/ExpenseContext/expenseContext';
import AlertContext from '../../context/AlertContext/alertContext';
import button from '../../img/close.png';
import { randomID, dateGenerator } from '../../Helper';
import './index.scss';

const ModalForm = () => {
  const {
    addExpense,
    editExpenseState,
    updateExpense,
    deleteEditExpense,
    saveExpenseLS,
    expensesList,
  } = useContext(ExpenseContext);
  const { handleModalForm } = useContext(ModalExpense);
  const { hideAlert, changeAnimation, alertFunction } =
    useContext(AlertContext);
  const [animation, setAnimation] = useState(true);
  const [expense, setExpense] = useState({
    expense_name: '',
    quantity: 0,
    expense_filter: '',
  });
  useEffect(() => {
    if (editExpenseState !== null) {
      setExpense(editExpenseState);
    }
  }, []);
  const handleChange = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value,
    });
  };
  const closeModal = () => {
    deleteEditExpense();
    changeAnimation(false);
    setAnimation(false);
    setTimeout(() => {
      hideAlert();
      handleModalForm();
    }, 500);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (expense.id) {
      expense.quantity = Number(expense.quantity);
      updateExpense(expense);
      deleteEditExpense();
      closeModal();
    } else {
      if (
        [
          expense.expense_name,
          expense.quantity,
          expense.expense_filter,
        ].includes('')
      ) {
        alertFunction('Todos los campos son obligatorios', 'red');
        changeAnimation(true);
        return;
      }
      closeModal();
      expense.id = randomID();
      expense.date = dateGenerator();
      expense.quantity = Number(expense.quantity);
      addExpense(expense);
    }
  };
  useEffect(() => {
    saveExpenseLS();
  }, [expensesList]);
  return (
    <div className={`modalForm ${animation ? 'animationIn' : 'animationOut'}`}>
      <div className="modalForm__div">
        <div className="modalForm__div--btn">
          <img src={button} alt="close btn" onClickCapture={closeModal} />
        </div>
        <h2 className="modalForm__div--h2">
          {editExpenseState !== null ? 'Editar Gasto' : 'Nuevo Gasto'}
        </h2>
        <form className="modalForm__form" onSubmit={handleSubmit}>
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
              value={expense.expense_name}
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
              value={expense.quantity}
            />
          </label>
          <label htmlFor="expense_filter">
            Filtrar Gasto
            <select
              className="modal__form--input"
              id="expense_filter"
              name="expense_filter"
              onChange={handleChange}
              value={expense.expense_filter}
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
          <input
            type="submit"
            value={editExpenseState !== null ? 'Editar' : 'Añadir'}
            className="modalForm__form--submit"
          />
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
