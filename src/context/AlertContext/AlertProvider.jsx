import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import Types from '../../types/alertTypes';

const AlertProvider = ({ children }) => {
  const initialState = {
    alert: null,
    animation: null,
  };
  const [state, dispatch] = useReducer(alertReducer, initialState);
  const showAlert = (msg, type) => {
    dispatch({
      type: Types.SHOW_ALERT,
      payload: { msg, type },
    });
  };
  const hideAlert = () => {
    dispatch({
      type: Types.HIDE_ALERT,
    });
  };
  const changeAnimation = (animationState) => {
    dispatch({
      type: Types.CHANGE_ANIMATION,
      payload: animationState,
    });
  };
  const alertFunction = (msg, type) => {
    setTimeout(() => hideAlert(), 4500);
    changeAnimation(true);
    showAlert(msg, type);
    setTimeout(() => {
      changeAnimation(false);
    }, 3000);
  };
  return (
    <AlertContext.Provider
      value={{
        animation: state.animation,
        alert: state.alert,
        changeAnimation,
        alertFunction,
        hideAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
