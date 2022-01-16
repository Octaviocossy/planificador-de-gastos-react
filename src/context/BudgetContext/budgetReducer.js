import Types from '../../types/budgetTypes';

const budgetReducer = (state, action) => {
  switch (action.type) {
    case Types.ADD_BUDGET:
      return {
        ...state,
        initialAmount: action.payload,
        isValid: true,
      };
    case Types.UPDATE_BUDGET:
      return {
        ...state,
        isValid: false,
        initialAmount: 0,
      };
    default:
      return state;
  }
};

export default budgetReducer;
