import React, { useState, useContext, useEffect } from 'react';
import ModalContext from '../../context/ModalContext/modalContext';
import ExpenseContext from '../../context/ExpenseContext/expenseContext';
import QMark from '../../img/Question_mark.png';
import './index.scss';

const ModalOptions = () => {
  const { deleteExpense, expensesList, saveExpenseLS } =
    useContext(ExpenseContext);
  const { handleModalOptions, handleModalForm } = useContext(ModalContext);
  const [animation, setAnimation] = useState(true);
  const closeModal = () => {
    setAnimation(false);
    setTimeout(() => {
      handleModalOptions();
    }, 500);
  };
  const edit = () => {
    closeModal();
    handleModalForm();
  };
  const delExpense = () => {
    deleteExpense();
    closeModal();
  };
  useEffect(() => {
    saveExpenseLS();
  }, [expensesList]);
  return (
    <div className={`modal ${animation ? 'animationIn' : 'animationOut'}`}>
      <div className="modal__div">
        <img src={QMark} alt="question_mark_pic" className="modal__div--pic" />
        <div className="modal__div--btns">
          <button
            type="button"
            className="modal__div--btns--edit"
            onClick={edit}
          >
            Editar
          </button>
          <button
            type="button"
            className="modal__div--btns--delete"
            onClick={delExpense}
          >
            Borrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalOptions;
