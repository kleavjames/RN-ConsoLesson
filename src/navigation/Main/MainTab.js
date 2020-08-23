import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import LessonStack from './LessonStack';
import ProfileStack from './ProfileStack';
import MoreScreen from './MoreStack';
import { Theme } from '../../constants';

const MainTab = createBottomTabNavigator();

export default () => {
  const { isTabVisible } = useSelector(state => state.customNavigation);

  return (
    <MainTab.Navigator
      tabBarOptions={{
        activeTintColor: Theme.DARK_COLOR,
        inactiveTintColor: Theme.LABEL_COLOR,
      }}
      screenOptions={{
        tabBarVisible: isTabVisible,
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
