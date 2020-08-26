export const INCREASE_FONT_SIZE = 'INCREASE_FONT_SIZE';
export const DECREASE_FONT_SIZE = 'DECREASE_FONT_SIZE';
export const RESET_SELECTED_FONT_ICON = 'RESET_SELECTED_FONT_ICON';
export const CHANGE_FONT_FAMILY = 'CHANGE_FONT_FAMILY';

export enum Fonts {
  AvenirLight = 'Avenir-Light',
  AvenirRoman = 'Avenir-Roman',
  AvenirBook = 'Avenir-Book',
  PoppinsLight = 'Poppins-Light',
  PoppinsRegular = 'Poppins-Regular',
  PoppinsBold = 'Poppins-Bold',
  RobotoLight = 'Roboto-Light',
  RobotoRegular = 'Roboto-Regular',
  RobotoBold = 'Roboto-Bold',
}

export interface FontFamily {
  font: string;
  lightFont: string;
  regularFont: string;
  boldFont: string;
}
export interface AppSettings {
  fontSize: number;
  headerFontSize: number;
  selectedFontIcon: boolean[];
  fontSelected: FontFamily;
}

export interface IncreaseFontAction {
  type: typeof INCREASE_FONT_SIZE;
}

export interface DecreaseFontAction {
  type: typeof DECREASE_FONT_SIZE;
}

export interface ResetSelectedFontIcon {
  type: typeof RESET_SELECTED_FONT_ICON;
}

export interface ChangeFontAction {
  type: typeof CHANGE_FONT_FAMILY;
  payload: {
    checkedFont: number;
    font: FontFamily;
  };
}

export type AppSettingActionTypes =
  | IncreaseFontAction
  | DecreaseFontAction
  | ResetSelectedFontIcon
  | ChangeFontAction;
