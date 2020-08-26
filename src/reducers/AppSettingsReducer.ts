import {
  AppSettings,
  AppSettingActionTypes,
  INCREASE_FONT_SIZE,
  DECREASE_FONT_SIZE,
  RESET_SELECTED_FONT_ICON,
  CHANGE_FONT_FAMILY,
  FontFamily,
} from '../types/AppSettings';

const initialFont: FontFamily = {
  font: 'Avenir',
  lightFont: 'Avenir-Light',
  regularFont: 'Avenir-Roman',
  boldFont: 'Avenir-Book',
};

const initialState: AppSettings = {
  fontSize: 18,
  headerFontSize: 24,
  selectedFontIcon: [true, false, false],
  fontSelected: initialFont,
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
    case RESET_SELECTED_FONT_ICON:
      const newState: boolean[] = [];
      state.selectedFontIcon.map(selected => {
        newState.push(selected ? false : selected);
      });

      return {
        ...state,
        selectedFontIcon: [...newState],
      };
    case CHANGE_FONT_FAMILY:
      const newArr: boolean[] = [...state.selectedFontIcon];
      newArr[action.payload.checkedFont] = true;

      return {
        ...state,
        selectedFontIcon: [...newArr],
        fontSelected: action.payload.font,
      };
    default:
      return state;
  }
};
