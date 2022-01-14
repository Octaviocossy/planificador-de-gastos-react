import Types from '../../types/expenseTypes';

const expenseReducer = (state, action) => {
  switch (action.type) {
    case Types.ADD_EXPENSES:
      return {
        ...state,
        expensesList: [...state.expensesList, action.payload],
      };
    case Types.EDIT_EXPENSE:
      return {
        ...state,
        editExpense: action.payload,
      };
    case Types.DELETE_EDIT_EXPENSE:
      return {
        ...state,
        editExpense: null,
      };
    case Types.TOTAL_SPENSED:
      return {
        ...state,
        totalSpensed: state.expensesList.reduce(
          (total, spense) => spense.quantity + total,
          0
        ),
      };
    case Types.UPDATE_EXPENSE:
      return {
        ...state,
        expensesList: state.expensesList.map((expense) =>
          expense.id === action.payload.id ? action.payload : expense
        ),
      };
    case Types.AMOUNT_AVAILABLE:
      return {
        ...state,
        available: action.payload - state.totalSpensed,
      };
    case Types.DELETE_EXPENSE:
      return {
        ...state,
        expensesList: state.expensesList.filter(
          (expense) => expense.id !== state.editExpense.id
        ),
      };
    case Types.PERCENTAGE_SPENSED:
      return {
        ...state,
        percentage: (
          ((action.payload - state.available) / action.payload) *
          100
        ).toFixed(2),
      };
    case Types.FILTER:
      return {
        ...state,
        filter: action.payload,
        expensesFiltered: state.expensesList.filter(
          (expense) => expense.expense_filter === action.payload
        ),
      };
    default:
      return state;
  }
};

export default expenseReducer;
