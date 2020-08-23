import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { customNavigation } from '../../actions';
import LessonNine from '../../components/Lessons/LessonNine';

export default () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const hideTabBar = () => dispatch(customNavigation.onHideTab());
  const showTabBar = () => dispatch(customNavigation.onShowTab());

  return (
    <LessonNine
      hideTabBar={hideTabBar}
      showTabBar={showTabBar}
      navigation={navigation}
    />
  );
};
