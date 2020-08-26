import React from 'react';
import { View, ScrollView } from 'react-native';

import lesson from '../../assets/data/lesson-5.json';
import { AppActions } from '../../types/actions';
import { globalStyles } from '../../config/styles';
import { ScrollEvent } from '../../helpers';
import { Header, Verse, Section, Topic, Message } from '../common';

interface Props {
  showTabBar: () => AppActions;
  hideTabBar: () => AppActions;
}

const LessonFive: React.FC<Props> = ({ showTabBar, hideTabBar }) => {
  return (
    <View style={globalStyles.container}>
      <ScrollView
        onScroll={e => ScrollEvent.onStartScroll(e, showTabBar, hideTabBar)}
        scrollEventThrottle={0}>
        <Header title={lesson.title} />
        <Verse scripture={lesson.scripture[0]} />
        <Section lesson={lesson.objective} />
        <Verse scripture={lesson.scripture[1]} />
        <Topic topic={lesson.topic.first} />
        <Topic topic={lesson.topic.second} />
        <Topic topic={lesson.topic.third} />
        <Topic topic={lesson.topic.fourth} />
        <Topic topic={lesson.topic.fifth} />
        <Topic topic={lesson.topic.sixth} />
        <Message message={lesson.request} />
      </ScrollView>
    </View>
  );
};

export default LessonFive;
