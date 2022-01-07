import Types from '../../types/budgetTypes';

const budgetReducer = (state, action) => {
  switch (action.type) {
    case Types.ADD_BUDGET:
      return {
        ...state,
        initialAmount: action.payload,
        isValid: true,
      };
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
    case Types.ADD_EXPENSES:
      return {
        ...state,
        expensesList: [...state.expensesList, action.payload],
      };
    case Types.TOTAL_SPENSED:
      return {
        ...state,
        totalSpensed: state.expensesList.reduce(
          (total, spense) => spense.quantity + total,
          0
        ),
      };
    case Types.AMOUNT_AVAILABLE:
      return {
        ...state,
        available: state.initialAmount - state.totalSpensed,
      };
    default:
      return state;
  }
};

export default budgetReducer;
