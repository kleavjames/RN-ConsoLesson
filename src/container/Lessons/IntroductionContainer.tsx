import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { customNavigation } from '../../actions';
import Introduction from '../../components/Lessons/Introduction';
import { AppState } from '../../reducers';

export default () => {
  const selectAppSettings = (state: AppState) => state.appSettings;
  const { headerFontSize, fontSelected } = useSelector(selectAppSettings);
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const hideTabBar = () => dispatch(customNavigation.onHideTab());
  const showTabBar = () => dispatch(customNavigation.onShowTab());

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', () => {
      showTabBar();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Introduction
      hideTabBar={hideTabBar}
      showTabBar={showTabBar}
      headerFontSize={headerFontSize}
      boldFontSelected={fontSelected.boldFont}
    />
  );
};
