import React, { useContext, useEffect } from 'react';
import ExpenseContext from '../../context/ExpenseContext/expenseContext';
import './index.scss';

const Filter = () => {
  const { updateFilter, expensesList, filter } = useContext(ExpenseContext);
  useEffect(() => {
    updateFilter(null);
  }, [expensesList]);
  return (
    <form className="filter__form">
      <label htmlFor="filter" className="filter__form--label">
        <p className="filter__form--label__p">Filtrar Gastos </p>
        <select
          className="filter__form--label__select"
          id="filter"
          name="filter"
          value={filter === null ? '-- Todas las Categorias --' : filter}
          onChange={(e) =>
            updateFilter(e.target.value === '' ? null : e.target.value)
          }
        >
          <option value=""> -- Todas las Categorias --</option>
          <option value="ahorro">Ahorro</option>
          <option value="comida">Comida</option>
          <option value="casa">Casa</option>
          <option value="gastos">Gastos Varios</option>
          <option value="ocio">Ocio</option>
          <option value="salud">Salud</option>
          <option value="suscripciones">Suscripciones</option>
        </select>
      </label>
    </form>
  );
};

export default Filter;
