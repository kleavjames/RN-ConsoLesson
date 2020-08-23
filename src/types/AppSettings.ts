export const INCREASE_FONT_SIZE = 'INCREASE_FONT_SIZE';
export const DECREASE_FONT_SIZE = 'DECREASE_FONT_SIZE';

export interface AppSettings {
  fontSize: number;
  headerFontSize: number;
}

export interface IncreseFontAction {
  type: typeof INCREASE_FONT_SIZE;
}

export interface DecreaseFontAction {
  type: typeof DECREASE_FONT_SIZE;
}

export type AppSettingActionTypes = IncreseFontAction | DecreaseFontAction;
