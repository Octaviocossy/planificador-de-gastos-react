import React, { useContext } from 'react';
import './index.scss';
import AlertContext from '../../context/AlertContext/alertContext';
import Alert from '../Alert/Alert';

const Header = () => {
  const { alert } = useContext(AlertContext);
  return (
    <>
      {alert && <Alert />}
      <header>
        <h1>Planificador de gastos</h1>
      </header>
    </>
  );
};

export default Header;
