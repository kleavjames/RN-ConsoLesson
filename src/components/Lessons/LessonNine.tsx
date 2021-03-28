import React from 'react';
import { View, ScrollView } from 'react-native';

import lesson from '../../assets/data/lesson-9.json';
import { AppActions } from '../../types/actions';
import { globalStyles } from '../../config/styles';
import { ScrollEvent } from '../../helpers';
import { Header, Section, Topic, Paragraph, Reference } from '../common';

interface Props {
  showTabBar: () => AppActions;
  hideTabBar: () => AppActions;
}

const LessonNine: React.FC<Props> = ({ showTabBar, hideTabBar }) => {
  return (
    <View style={globalStyles.container}>
      <ScrollView
        onScroll={e => ScrollEvent.onStartScroll(e, showTabBar, hideTabBar)}
        scrollEventThrottle={0}>
        <Header title={lesson.title} />
        <Section lesson={lesson.objective} />
        <Topic topic={lesson.topic.first} />
        <Section lesson={lesson.application} />
        <Topic topic={lesson.topicTwo.first} />
        <Topic topic={lesson.topicTwo.second} />
        <Paragraph>{lesson.topicTwo.second.messageThree}</Paragraph>
        <Paragraph>{lesson.topicTwo.second.messageFour}</Paragraph>
        <Reference topic={lesson.topicTwo.second.reference} />
        <Topic topic={lesson.topicTwo.third} />
      </ScrollView>
    </View>
  );
};

export default LessonNine;
