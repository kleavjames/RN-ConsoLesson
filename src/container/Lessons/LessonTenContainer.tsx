import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { customNavigation } from '../../actions';
import LessonTen from '../../components/Lessons/LessonTen';

export default () => {
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

  return <LessonTen hideTabBar={hideTabBar} showTabBar={showTabBar} />;
};
