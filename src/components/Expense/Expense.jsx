import React from 'react';
import ahorroIcon from '../../img/icono_ahorro.svg';
import casaIcon from '../../img/icono_casa.svg';
import comidaIcon from '../../img/icono_comida.svg';
import gastosIcon from '../../img/icono_gastos.svg';
import ocioIcon from '../../img/icono_ocio.svg';
import saludIcon from '../../img/icono_salud.svg';
import suscripcionesIcon from '../../img/icono_suscripciones.svg';
import './index.scss';

const Expense = ({ expense }) => {
  const iconDictionary = {
    ahorro: ahorroIcon,
    comida: comidaIcon,
    casa: casaIcon,
    gastos: gastosIcon,
    ocio: ocioIcon,
    salud: saludIcon,
    suscripciones: suscripcionesIcon,
  };
  return (
    <div className="expense__div">
      <div className="expense__div--pic">
        <img src={iconDictionary[expense.expense_filter]} alt="icon" />
      </div>
      <div className="expense__div--data">
        <p className="expense__div--data--filter">{expense.expense_filter}</p>
        <p className="expense__div--data--name">{expense.expense_name}</p>
        <p className="expense__div--data--date">
          <span className="expense__div--data--date__span">Agregado el:</span>{' '}
          {expense.date}
        </p>
      </div>
      <div className="expense__div--price">${expense.quantity}</div>
    </div>
  );
};

export default Expense;
