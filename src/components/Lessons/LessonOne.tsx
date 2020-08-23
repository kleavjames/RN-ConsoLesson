import React from 'react';
import { ScrollView, View } from 'react-native';

import lesson from '../../assets/data/lesson-1.json';
import { globalStyles } from '../../config/styles';
import { ScrollEvent } from '../../helpers';
import { Header, Section, Paragraph, Topic } from '../common';
import { AppActions } from '../../types/actions';

interface Props {
  showTabBar: () => AppActions;
  hideTabBar: () => AppActions;
}

const LessonOne: React.FC<Props> = ({ showTabBar, hideTabBar }) => {
  return (
    <View style={globalStyles.container}>
      <ScrollView
        onScroll={e => ScrollEvent.onStartScroll(e, showTabBar, hideTabBar)}
        scrollEventThrottle={0}>
        <Header title={lesson.title} />
        <Paragraph>{lesson.introduction}</Paragraph>
        <Section lesson={lesson.guideQuestion} />
        <Topic topic={lesson.topic.first} />
        <Topic topic={lesson.topic.second} />
        <Topic topic={lesson.topic.third} />
        <Topic topic={lesson.topic.fourth} />
        <Topic topic={lesson.topic.fifth} />
        <Section lesson={lesson.application} />
        <Section lesson={lesson.prayer} />
      </ScrollView>
    </View>
  );
};

export default LessonOne;
