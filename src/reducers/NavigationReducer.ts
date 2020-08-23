import {
  VisibleTabBar,
  HIDE_TAB,
  SHOW_TAB,
  CustomNavigationActionTypes,
} from '../types/Navigation';

const initialState: VisibleTabBar = {
  showTabBar: true,
};

export default (
  state = initialState,
  action: CustomNavigationActionTypes,
): VisibleTabBar => {
  switch (action.type) {
    case HIDE_TAB:
      return { ...state, showTabBar: false };
    case SHOW_TAB:
      return { ...state, showTabBar: true };
    default:
      return state;
  }
};
