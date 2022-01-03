import React, { useContext } from 'react';
import BudgetContext from '../../context/BudgetContext/budgetContext';
import button from '../../img/close.png';
import './index.scss';

const Modal = () => {
  const { handleModal } = useContext(BudgetContext);
  return (
    <div className="modal">
      <div className="modal__div">
        <div className="modal__div--btn">
          <img src={button} alt="close btn" onClickCapture={handleModal} />
        </div>
        <h2 className="modal__div--h2">Nuevo Gasto</h2>
        <form className="modal__form">
          <label htmlFor="spend_name">
            Nombre Gasto
            <input
              type="text"
              className="modal__form--input"
              placeholder="Añade un Nombre de Gasto"
              id="spend_name"
            />
          </label>
          <label htmlFor="quantity">
            Cantidad
            <input
              type="text"
              className="modal__form--input"
              placeholder="Añade la cantidad del gasto: ej. 250"
              id="quantity"
            />
          </label>
          <label htmlFor="spend_filter">
            Filtrar Gasto
            <select className="modal__form--input" id="spend_filter">
              <option value=""> --- </option>
            </select>
          </label>
          <input type="submit" value="Añadir" className="modal__form--submit" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
