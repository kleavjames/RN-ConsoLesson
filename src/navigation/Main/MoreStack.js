import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationStyles } from '../../styles';
import MoreScreen from '../../screens/MoreScreen';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator screenOptions={navigationStyles.navigatorStyle} mode="modal">
    <Stack.Screen
      name="More"
      component={MoreScreen}
      options={{
        title: 'More',
      }}
    />
  </Stack.Navigator>
);
