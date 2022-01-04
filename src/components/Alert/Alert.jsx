import React, { useContext } from 'react';
import AlertContext from '../../context/AlertContext/alertContext';
import './index.scss';

const Alert = () => {
  const { alert, animation } = useContext(AlertContext);
  return (
    <div className={`${alert.type} ${animation ? 'alertDown' : 'alertUp'}`}>
      <p className="alert__p">{alert.msg}</p>
    </div>
  );
};

export default Alert;
