import { AppSettingActionTypes } from './AppSettings';
import { CustomNavigationActionTypes } from './Navigation';

export type AppActions = CustomNavigationActionTypes | AppSettingActionTypes;
