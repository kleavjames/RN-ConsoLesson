import React from 'react';
import { View, ScrollView } from 'react-native';

import lesson from '../../assets/data/lesson-10.json';
import { AppActions } from '../../types/actions';
import { globalStyles } from '../../config/styles';
import { ScrollEvent } from '../../helpers';
import { Header, Section, Topic } from '../common';

interface Props {
  showTabBar: () => AppActions;
  hideTabBar: () => AppActions;
}

const LessonTen: React.FC<Props> = ({ showTabBar, hideTabBar }) => {
  return (
    <View style={globalStyles.container}>
      <ScrollView
        onScroll={e => ScrollEvent.onStartScroll(e, showTabBar, hideTabBar)}
        scrollEventThrottle={0}>
        <Header title={lesson.title} />
        <Section lesson={lesson.objective} />
        <Topic topic={lesson.topic.first} />
        <Topic topic={lesson.topic.second} />
        <Topic topic={lesson.topic.third} />
        <Section lesson={lesson.note} />
      </ScrollView>
    </View>
  );
};

export default LessonTen;
