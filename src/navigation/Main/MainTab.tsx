import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import LessonStack from './LessonStack';
import ProfileStack from './ProfileStack';
import MoreScreen from './MoreStack';
import { Theme } from '../../constants';
import { AppState } from '../../reducers';
import { MainTabTypes } from '../../types/Navigation';

const MainTab = createBottomTabNavigator<MainTabTypes>();

export default () => {
  const selectNavigation = (state: AppState) => state.customNavigation;
  const { showTabBar } = useSelector(selectNavigation);

  return (
    <MainTab.Navigator
      tabBarOptions={{
        activeTintColor: Theme.DARK_COLOR,
        inactiveTintColor: Theme.LABEL_COLOR,
      }}
      screenOptions={{
        tabBarVisible: showTabBar,
      }}>
      <MainTab.Screen
        name="Lessons"
        component={LessonStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-book" size={size} color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-person" size={size} color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-menu" size={size} color={color} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};
