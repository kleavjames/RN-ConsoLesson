import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { appSettings } from '../../actions';
import Settings from '../../components/General/AppSettings';
import { SettingsScreenProp } from '../../types/Navigation';

export default () => {
  const navigation = useNavigation<SettingsScreenProp>();
  const dispatch = useDispatch();

  const increaseFont = () => dispatch(appSettings.increaseFontSize());
  const decreaseFont = () => dispatch(appSettings.decreaseFontSize());

  return (
    <Settings
      navigation={navigation}
      increaseFont={increaseFont}
      decreaseFont={decreaseFont}
    />
  );
};
