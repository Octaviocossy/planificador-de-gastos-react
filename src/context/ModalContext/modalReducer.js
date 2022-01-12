import Types from '../../types/modalTypes';

const modalReducer = (state, action) => {
  switch (action.type) {
    case Types.HANDLE_MODAL_FORM:
      return {
        ...state,
        modalForm: !state.modalForm,
      };
    case Types.HANDLE_MODAL_OPTIONS:
      return {
        ...state,
        modalOptions: !state.modalOptions,
      };
    default:
      return state;
  }
};

export default modalReducer;
