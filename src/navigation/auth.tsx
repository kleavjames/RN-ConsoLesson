import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from '../screens/Auth/SignInScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import SplashScreen from '../screens/Auth/SplashScreen';

const AuthStack = createStackNavigator();

export default () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen name="Splash" component={SplashScreen} />
    <AuthStack.Screen name="SignIn" component={SignInScreen} />
    <AuthStack.Screen name="SignUp" component={SignUpScreen} />
  </AuthStack.Navigator>
);
