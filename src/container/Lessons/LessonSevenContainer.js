import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { customNavigation } from '../../actions';
import LessonSeven from '../../components/Lessons/LessonSeven';

export default () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const hideTabBar = () => dispatch(customNavigation.onHideTab());
  const showTabBar = () => dispatch(customNavigation.onShowTab());

  return (
    <LessonSeven
      hideTabBar={hideTabBar}
      showTabBar={showTabBar}
      navigation={navigation}
    />
  );
};
