import { combineReducers } from 'redux';
import customNavigation from './NavigationReducer';
import generalSettings from './GeneralSettingsReducer';

export default combineReducers({
  customNavigation,
  generalSettings,
});
