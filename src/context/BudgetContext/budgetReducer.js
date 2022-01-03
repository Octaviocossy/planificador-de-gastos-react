import Types from '../../types/budgetTypes';

const budgetReducer = (state, action) => {
  switch (action.type) {
    case Types.ADD_BUDGET:
      return {
        ...state,
        initialAmount: action.payload,
        isValid: true,
      };
    case Types.HANDLE_MODAL:
      return {
        ...state,
        modal: !state.modal,
      };
    default:
      return state;
  }
};

export default budgetReducer;
