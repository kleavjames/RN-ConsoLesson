import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationStyles } from '../../config/styles';
import FontSelection from '../../components/General/FontSelection';
import AppSettingsContainer from '../../container/General/AppSettingsContainer';
import { AppSettingStackTypes } from '../../types/Navigation';

const Stack = createStackNavigator<AppSettingStackTypes>();

export default () => (
  <Stack.Navigator screenOptions={navigationStyles.navigatorStyle} mode="modal">
    <Stack.Screen
      name="AppSetting"
      component={AppSettingsContainer}
      options={{
        title: 'App Setting',
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
      }}
    />
    <Stack.Screen
      name="FontSelection"
      component={FontSelection}
      options={{
        title: 'Font Selection',
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);
