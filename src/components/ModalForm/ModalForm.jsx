import React, { useState, useContext, useEffect } from 'react';
import ModalExpense from '../../context/ModalContext/modalContext';
import ExpenseContext from '../../context/ExpenseContext/expenseContext';
import AlertContext from '../../context/AlertContext/alertContext';
import button from '../../img/close.png';
import { randomID, dateGenerator, textVerificator } from '../../Helper';
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
  const { alertFunction } = useContext(AlertContext);
  const [animation, setAnimation] = useState(true);
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
  const closeModal = () => {
    setAnimation(false);
    setTimeout(() => {
      handleModalForm();
      deleteEditExpense();
    }, 800);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (expense.id) {
      if (
        [
          expense.expense_name,
          expense.quantity,
          expense.expense_filter,
        ].includes('')
      ) {
        alertFunction('Todos los campos son obligatorios', 'red');
        return;
      }
      if (expense.quantity < 0) {
        alertFunction('Solo se aceptan valores positivos', 'red');
        return;
      }
      expense.quantity = Number(expense.quantity);
      updateExpense(expense);
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
        return;
      }
      if (expense.quantity < 0) {
        alertFunction('Solo se aceptan valores positivos', 'red');
        return;
      }
      if (textVerificator(expense.expense_name)) {
        closeModal();
        expense.id = randomID();
        expense.date = dateGenerator();
        expense.quantity = Number(expense.quantity);
        addExpense(expense);
      } else {
        alertFunction('Utiliza palabras mas cortas!', 'red');
      }
    }
  };
  useEffect(() => {
    if (editExpenseState !== null) {
      setExpense(editExpenseState);
    }
  }, []);
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
              placeholder="A??ade un Nombre de Gasto"
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
              placeholder="A??ade la cantidad del gasto: ej. 250"
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
            value={editExpenseState !== null ? 'Editar' : 'A??adir'}
            className="modalForm__form--submit"
          />
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
