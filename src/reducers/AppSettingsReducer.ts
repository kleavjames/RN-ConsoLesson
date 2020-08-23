import {
  AppSettings,
  AppSettingActionTypes,
  INCREASE_FONT_SIZE,
  DECREASE_FONT_SIZE,
} from '../types/AppSettings';

const initialState: AppSettings = {
  fontSize: 18,
  headerFontSize: 24,
};

export default (
  state = initialState,
  action: AppSettingActionTypes,
): AppSettings => {
  switch (action.type) {
    case INCREASE_FONT_SIZE:
      return {
        ...state,
        fontSize: state.fontSize + 2,
        headerFontSize: state.headerFontSize + 2,
      };
    case DECREASE_FONT_SIZE:
      return {
        ...state,
        fontSize: state.fontSize - 2,
        headerFontSize: state.headerFontSize - 2,
      };
    default:
      return state;
  }
};
