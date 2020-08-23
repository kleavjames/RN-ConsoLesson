import { combineReducers } from 'redux';
import customNavigation from './NavigationReducer';
import appSettings from './AppSettingsReducer';

export const rootReducer = combineReducers({
  customNavigation,
  appSettings,
});

export type AppState = ReturnType<typeof rootReducer>;
