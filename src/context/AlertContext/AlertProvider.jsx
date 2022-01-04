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
  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        animation: state.animation,
        showAlert,
        hideAlert,
        changeAnimation,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
