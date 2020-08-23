import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTab from './MainTab';
import SettingsStack from './SettingsStack';

const Drawer = createDrawerNavigator();

export default () => (
  <Drawer.Navigator>
    <Drawer.Screen name="MainTab" component={MainTab} />
    <Drawer.Screen name="Settings" component={SettingsStack} />
  </Drawer.Navigator>
);
