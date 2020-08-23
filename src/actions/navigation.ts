import {
  SHOW_TAB,
  HIDE_TAB,
  CustomNavigationActionTypes,
} from '../types/Navigation';

const onShowTab = (): CustomNavigationActionTypes => ({ type: SHOW_TAB });

const onHideTab = (): CustomNavigationActionTypes => ({ type: HIDE_TAB });

export default {
  onShowTab,
  onHideTab,
};
