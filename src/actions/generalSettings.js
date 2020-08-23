import { Types } from '../constants';

const increaseFontSize = () => {
  return async (dispatch, getState) => {
    const { fontSize } = getState().generalSettings;

    if (fontSize < 30) {
      dispatch({ type: Types.INCREASE_FONT_SIZE });
    }
  };
};

const decreaseFontSize = () => {
  return async (dispatch, getState) => {
    const { fontSize } = getState().generalSettings;

    if (fontSize > 16) {
      dispatch({ type: Types.DECREASE_FONT_SIZE });
    }
  };
};

export default {
  increaseFontSize,
  decreaseFontSize,
};
