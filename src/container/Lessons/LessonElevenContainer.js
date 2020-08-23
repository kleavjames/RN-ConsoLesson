import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { customNavigation } from '../../actions';
import LessonEleven from '../../components/Lessons/LessonEleven';

export default () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const hideTabBar = () => dispatch(customNavigation.onHideTab());
  const showTabBar = () => dispatch(customNavigation.onShowTab());

  return (
    <LessonEleven
      hideTabBar={hideTabBar}
      showTabBar={showTabBar}
      navigation={navigation}
    />
  );
};
