import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { generalSettings } from '../../actions';
import Settings from '../../components/General/Settings';

export default () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const increaseFont = () => dispatch(generalSettings.increaseFontSize());
  const decreaseFont = () => dispatch(generalSettings.decreaseFontSize());

  return (
    <Settings
      navigation={navigation}
      increaseFont={increaseFont}
      decreaseFont={decreaseFont}
    />
  );
};
