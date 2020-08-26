import React from 'react';
import { View, ScrollView } from 'react-native';

import lesson from '../../assets/data/lesson-4.json';
import { AppActions } from '../../types/actions';
import { globalStyles } from '../../config/styles';
import { ScrollEvent } from '../../helpers';
import { Header, Verse, Section, Topic, Reference, Message } from '../common';

interface Props {
  showTabBar: () => AppActions;
  hideTabBar: () => AppActions;
}

const LessonFour: React.FC<Props> = ({ showTabBar, hideTabBar }) => {
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
        <Reference topic={lesson.topic.second.reference} />
        <Topic topic={lesson.topic.third} />
        <Topic topic={lesson.topic.fourth} />
        <Topic topic={lesson.topic.fifth} />
        <Topic topic={lesson.topic.sixth} />
        <Topic topic={lesson.topic.seventh} />
        <Message message={lesson.request} />
      </ScrollView>
    </View>
  );
};

export default LessonFour;
