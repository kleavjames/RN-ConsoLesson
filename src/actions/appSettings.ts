import { INCREASE_FONT_SIZE, DECREASE_FONT_SIZE } from '../types/AppSettings';
import { AppThunk } from '../config/thunk';

const increaseFontSize = (): AppThunk => async (dispatch, getState) => {
  const { fontSize } = getState().appSettings;

  if (fontSize < 30) {
    dispatch({ type: INCREASE_FONT_SIZE });
  }
};

const decreaseFontSize = (): AppThunk => async (dispatch, getState) => {
  const { fontSize } = getState().appSettings;

  if (fontSize > 16) {
    dispatch({ type: DECREASE_FONT_SIZE });
  }
};

export default {
  increaseFontSize,
  decreaseFontSize,
};
