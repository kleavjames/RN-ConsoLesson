import { Types } from '../constants';

const INITITAL_STATE = {
  fontSize: 18,
  headerFontSize: 24,
};

export default (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case Types.INCREASE_FONT_SIZE:
      return {
        ...state,
        fontSize: state.fontSize + 2,
        headerFontSize: state.headerFontSize + 2,
      };
    case Types.DECREASE_FONT_SIZE:
      return {
        ...state,
        fontSize: state.fontSize - 2,
        headerFontSize: state.headerFontSize - 2,
      };
    default:
      return state;
  }
};
