import Types from '../../types/budgetTypes';

const budgetReducer = (state, action) => {
  switch (action.type) {
    case Types.ADD_BUDGET:
      return {
        ...state,
        initialAmount: action.payload,
      };
    default:
      return state;
  }
};

export default budgetReducer;
