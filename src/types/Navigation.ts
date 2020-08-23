import { StackNavigationProp } from '@react-navigation/stack';

export const SHOW_TAB = 'SHOW_TAB';
export const HIDE_TAB = 'HIDE_TAB';

export interface VisibleTabBar {
  showTabBar: boolean;
}

export interface ShowTabAction {
  type: typeof SHOW_TAB;
}

export interface HideTabAction {
  type: typeof HIDE_TAB;
}

export type CustomNavigationActionTypes = ShowTabAction | HideTabAction;

/**
 * React Navigation type checking
 */

export type LessonStackTypes = {
  Lessons: undefined;
  Introduction: undefined;
  Lesson1: undefined;
  Lesson2: undefined;
  Lesson3: undefined;
  Lesson4: undefined;
  Lesson5: undefined;
  Lesson6: undefined;
  Lesson7: undefined;
  Lesson8: undefined;
  Lesson9: undefined;
  Lesson10: undefined;
  Lesson11: undefined;
  Lesson12: undefined;
  Settings: undefined;
};

export type MoreStackTypes = {
  More: undefined;
};

export type ProfileStackTypes = {
  Profile: undefined;
};

export type SettingsScreenProp = StackNavigationProp<
  LessonStackTypes,
  'Settings'
>;

export type MainTabTypes = {
  Lessons: undefined;
  Profile: undefined;
  More: undefined;
};
