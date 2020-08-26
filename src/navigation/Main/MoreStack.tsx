import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationStyles } from '../../config/styles';
import MoreScreen from '../../screens/MoreScreen';
import { MoreStackTypes } from '../../types/Navigation';

const Stack = createStackNavigator<MoreStackTypes>();

export default () => (
  <Stack.Navigator screenOptions={navigationStyles.navigatorStyle}>
    <Stack.Screen
      name="More"
      component={MoreScreen}
      options={{
        title: 'More',
      }}
    />
  </Stack.Navigator>
);
