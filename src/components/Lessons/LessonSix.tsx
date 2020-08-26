import React from 'react';
import { View, ScrollView } from 'react-native';

import lesson from '../../assets/data/lesson-6.json';
import { AppActions } from '../../types/actions';
import { globalStyles } from '../../config/styles';
import { ScrollEvent } from '../../helpers';
import { Header, Verse, Section, Topic, Paragraph } from '../common';

interface Props {
  showTabBar: () => AppActions;
  hideTabBar: () => AppActions;
}

const LessonSix: React.FC<Props> = ({ showTabBar, hideTabBar }) => {
  return (
    <View style={globalStyles.container}>
      <ScrollView
        onScroll={e => ScrollEvent.onStartScroll(e, showTabBar, hideTabBar)}
        scrollEventThrottle={0}>
        <Header title={lesson.title} />
        <Verse scripture={lesson.scripture[0]} />
        <Section lesson={lesson.objective} />
        <Topic topic={lesson.topic.first} />
        <Topic topic={lesson.topic.second} />
        <Topic topic={lesson.topic.third} />
        <Topic topic={lesson.topic.fourth} />
        <Verse scripture={lesson.topic.fourth.scriptureTwo[0]} />
        <Paragraph>{lesson.message}</Paragraph>
      </ScrollView>
    </View>
  );
};

export default LessonSix;
