import { Types } from '../constants';

const onShowTab = () => {
  return { type: Types.SHOW_TAB };
};

const onHideTab = () => {
  return { type: Types.HIDE_TAB };
};

export default {
  onShowTab,
  onHideTab,
};
