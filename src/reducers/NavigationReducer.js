import { Types } from '../constants';

const INITITAL_STATE = {
  isTabVisible: true,
};

export default (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case Types.HIDE_TAB:
      return { ...state, isTabVisible: false };
    case Types.SHOW_TAB:
      return { ...state, isTabVisible: true };
    default:
      return state;
  }
};
