import React from 'react';
import { View, ScrollView } from 'react-native';

import lesson from '../../assets/data/lesson-2.json';
import { globalStyles } from '../../config/styles';
import { ScrollEvent } from '../../helpers';
import { Header, Verse, Topic, Section, Reference } from '../common';
import { AppActions } from '../../types/actions';

interface Props {
  showTabBar: () => AppActions;
  hideTabBar: () => AppActions;
}

const LessonTwo: React.FC<Props> = ({ showTabBar, hideTabBar }) => {
  return (
    <View style={globalStyles.container}>
      <ScrollView
        onScroll={e => ScrollEvent.onStartScroll(e, showTabBar, hideTabBar)}
        scrollEventThrottle={0}>
        <Header title={lesson.title} />
        <Verse scripture={lesson.scripture[0]} />
        <Topic topic={lesson.topic.first} />
        <Topic topic={lesson.topic.second} />
        <Reference topic={lesson.topic.second.subTopic[1]} />
        <Verse scripture={lesson.topic.second.subScripture[0]} />
        <Verse scripture={lesson.topic.second.subScripture[1]} />
        <Topic topic={lesson.topic.third} />
        <Section lesson={lesson.application} />
      </ScrollView>
    </View>
  );
};

export default LessonTwo;
