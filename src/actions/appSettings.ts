import {
  INCREASE_FONT_SIZE,
  DECREASE_FONT_SIZE,
  RESET_SELECTED_FONT_ICON,
  CHANGE_FONT_FAMILY,
  FontFamily,
  Fonts,
} from '../types/AppSettings';
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

const onChangeFont = (font: string, index: number): AppThunk => async (
  dispatch,
  getState,
) => {
  const { selectedFontIcon } = getState().appSettings;
  const selectedFont: FontFamily = {
    font: '',
    lightFont: '',
    regularFont: '',
    boldFont: '',
  };

  if (!selectedFontIcon[index]) {
    dispatch({ type: RESET_SELECTED_FONT_ICON });
  }

  if (font === 'Avenir') {
    selectedFont.font = font;
    selectedFont.lightFont = Fonts.AvenirLight;
    selectedFont.regularFont = Fonts.AvenirRoman;
    selectedFont.boldFont = Fonts.AvenirBook;
  } else if (font === 'Poppins') {
    selectedFont.font = font;
    selectedFont.lightFont = Fonts.PoppinsLight;
    selectedFont.regularFont = Fonts.PoppinsRegular;
    selectedFont.boldFont = Fonts.PoppinsBold;
  } else if (font === 'Roboto') {
    selectedFont.font = font;
    selectedFont.lightFont = Fonts.RobotoLight;
    selectedFont.regularFont = Fonts.RobotoRegular;
    selectedFont.boldFont = Fonts.RobotoBold;
  }

  dispatch({
    type: CHANGE_FONT_FAMILY,
    payload: {
      checkedFont: index,
      font: selectedFont,
    },
  });
};

export default {
  increaseFontSize,
  decreaseFontSize,
  onChangeFont,
};
