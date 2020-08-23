import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { customNavigation } from '../../actions';
import LessonTwelve from '../../components/Lessons/LessonTwelve';

export default () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const hideTabBar = () => dispatch(customNavigation.onHideTab());
  const showTabBar = () => dispatch(customNavigation.onShowTab());

  return (
    <LessonTwelve
      hideTabBar={hideTabBar}
      showTabBar={showTabBar}
      navigation={navigation}
    />
  );
};
