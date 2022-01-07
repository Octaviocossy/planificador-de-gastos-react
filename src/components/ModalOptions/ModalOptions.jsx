import React, { useContext } from 'react';
import BudgetContext from '../../context/BudgetContext/budgetContext';
import QMark from '../../img/Question_mark.png';
import './index.scss';

const ModalOptions = () => {
  const { handleModalOptions } = useContext(BudgetContext);
  return (
    <div className="modal">
      <div className="modal__div">
        <img src={QMark} alt="question_mark_pic" className="modal__div--pic" />
        <div className="modal__div--btns">
          <button type="button" className="modal__div--btns--edit" onClick={handleModalOptions}>
            Editar
          </button>
          <button type="button" className="modal__div--btns--delete"  onClick={handleModalOptions}>
            Borrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalOptions;