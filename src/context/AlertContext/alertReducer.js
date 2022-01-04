import Types from '../../types/alertTypes';

const alertReducer = (state, action) => {
  switch (action.type) {
    case Types.SHOW_ALERT:
      return {
        ...state,
        alert: action.payload,
      };
    case Types.HIDE_ALERT:
      return {
        ...state,
        alert: null,
      };
    case Types.CHANGE_ANIMATION:
      return {
        ...state,
        animation: action.payload,
      };
    default:
      return state;
  }
};

export default alertReducer;
