import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../../screens/ProfileScreen';
import { ProfileStackTypes } from '../../types/Navigation';

const ProfileStack = createStackNavigator<ProfileStackTypes>();

export default () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        title: 'Profile',
      }}
    />
  </ProfileStack.Navigator>
);
