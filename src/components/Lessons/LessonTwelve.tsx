import React from 'react';
import { View, ScrollView } from 'react-native';

import lesson from '../../assets/data/lesson-12.json';
import { AppActions } from '../../types/actions';
import { globalStyles } from '../../config/styles';
import { ScrollEvent } from '../../helpers';
import { Header, Section, Verse } from '../common';

interface Props {
  showTabBar: () => AppActions;
  hideTabBar: () => AppActions;
}

const LessonTwelve: React.FC<Props> = ({ showTabBar, hideTabBar }) => {
  return (
    <View style={globalStyles.container}>
      <ScrollView
        onScroll={e => ScrollEvent.onStartScroll(e, showTabBar, hideTabBar)}
        scrollEventThrottle={0}>
        <Header title={lesson.title} />
        <Verse scripture={lesson.scripture[0]} />
        <Section lesson={lesson.note} />
      </ScrollView>
    </View>
  );
};

export default LessonTwelve;
