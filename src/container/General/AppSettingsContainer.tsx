import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { appSettings } from '../../actions';
import AppSettings from '../../components/General/AppSettings';
import { AppSettingsScreenProp } from '../../types/Navigation';
import { AppState } from '../../reducers';

export default () => {
  const selectAppSettings = (state: AppState) => state.appSettings;
  const { selectedFontIcon } = useSelector(selectAppSettings);
  const dispatch = useDispatch();

  const navigation = useNavigation<AppSettingsScreenProp>();

  const increaseFont = () => dispatch(appSettings.increaseFontSize());
  const decreaseFont = () => dispatch(appSettings.decreaseFontSize());
  const changeFont = (font: string, index: number) =>
    dispatch(appSettings.onChangeFont(font, index));

  return (
    <AppSettings
      navigation={navigation}
      increaseFont={increaseFont}
      decreaseFont={decreaseFont}
      changeFont={changeFont}
      selectedFontIcon={selectedFontIcon}
    />
  );
};
