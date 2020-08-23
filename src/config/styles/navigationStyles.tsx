import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Theme } from '../../constants';

export const navigatorStyle = {
  headerBackTitleStyle: {
    color: Theme.DARK_COLOR,
  },
  headerBackImage: () => (
    <Icon name="chevron-left" color={Theme.DARK_COLOR} size={28} />
  ),
  headerTintColor: Theme.DARK_COLOR,
};
