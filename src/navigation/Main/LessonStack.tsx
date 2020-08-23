import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { navigationStyles } from '../../config/styles';
import { Theme } from '../../constants';
import LessonsScreen from '../../screens/LessonsScreen';
import {
  IntroductionContainer,
  LessonOneContainer,
  LessonTwoContainer,
  LessonThreeContainer,
  LessonFourContainer,
  LessonFiveContainer,
  LessonSixContainer,
  LessonSevenContainer,
  LessonEightContainer,
  LessonNineContainer,
  LessonTenContainer,
  LessonElevenContainer,
  LessonTwelveContainer,
} from '../../container/Lessons';
import SettingsContainer from '../../container/General/SettingsContainer';
import { LessonStackTypes } from '../../types/Navigation';

const Stack = createStackNavigator<LessonStackTypes>();

export default ({ navigation }: { navigation: any }) => (
  <Stack.Navigator
    mode="modal"
    screenOptions={{
      headerRight: () => (
        <Icon.Button
          name="format-size"
          size={25}
          color={Theme.DARK_COLOR}
          backgroundColor={Theme.WHITE_COLOR}
          onPress={() => navigation.navigate('Settings')}
        />
      ),
      ...navigationStyles.navigatorStyle,
    }}>
    <Stack.Screen
      name="Lessons"
      component={LessonsScreen}
      options={{ headerRight: undefined }}
    />
    <Stack.Screen name="Introduction" component={IntroductionContainer} />
    <Stack.Screen
      name="Lesson1"
      component={LessonOneContainer}
      options={{
        title: 'Lesson 1',
      }}
    />
    <Stack.Screen
      name="Lesson2"
      component={LessonTwoContainer}
      options={{ title: 'Lesson 2' }}
    />
    <Stack.Screen
      name="Lesson3"
      component={LessonThreeContainer}
      options={{ title: 'Lesson 3' }}
    />
    <Stack.Screen
      name="Lesson4"
      component={LessonFourContainer}
      options={{ title: 'Lesson 4' }}
    />
    <Stack.Screen
      name="Lesson5"
      component={LessonFiveContainer}
      options={{ title: 'Lesson 5' }}
    />
    <Stack.Screen
      name="Lesson6"
      component={LessonSixContainer}
      options={{ title: 'Lesson 6' }}
    />
    <Stack.Screen
      name="Lesson7"
      component={LessonSevenContainer}
      options={{ title: 'Lesson 7' }}
    />
    <Stack.Screen
      name="Lesson8"
      component={LessonEightContainer}
      options={{ title: 'Lesson 8' }}
    />
    <Stack.Screen
      name="Lesson9"
      component={LessonNineContainer}
      options={{ title: 'Lesson 9' }}
    />
    <Stack.Screen
      name="Lesson10"
      component={LessonTenContainer}
      options={{ title: 'Lesson 10' }}
    />
    <Stack.Screen
      name="Lesson11"
      component={LessonElevenContainer}
      options={{ title: 'Lesson 11' }}
    />
    <Stack.Screen
      name="Lesson12"
      component={LessonTwelveContainer}
      options={{ title: 'Lesson 12' }}
    />
    <Stack.Screen
      name="Settings"
      component={SettingsContainer}
      options={{
        title: 'Settings',
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
      }}
    />
  </Stack.Navigator>
);
