import Types from '../../types/alertTypes';

const alertReducer = (state, action) => {
  switch (action.type) {
    case Types.SHOW_ALERT:
      return {
        alert: action.payload,
      };
    case Types.HIDE_ALERT:
      return {
        alert: null,
      };
    default:
      return state;
  }
};

export default alertReducer;
