import React, { useReducer } from 'react';
import Types from '../../types/modalTypes';
import ModalContext from './modalContext';
import modalReducer from './modalReducer';

const ModalProvider = ({ children }) => {
  const initialState = {
    modalForm: false,
    modalOptions: false,
  };
  const [state, dispatch] = useReducer(modalReducer, initialState);
  const handleModalForm = () => {
    dispatch({
      type: Types.HANDLE_MODAL_FORM,
    });
  };
  const handleModalOptions = () => {
    dispatch({
      type: Types.HANDLE_MODAL_OPTIONS,
    });
  };
  return (
    <ModalContext.Provider
      value={{
        modalOptions: state.modalOptions,
        modalForm: state.modalForm,
        handleModalForm,
        handleModalOptions,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
