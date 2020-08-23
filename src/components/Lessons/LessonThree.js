import React from 'react';
import { View, ScrollView } from 'react-native';

import lesson from '../../assets/data/lesson-3.json';
import { globalStyles } from '../../styles';
import { ScrollEvent } from '../../helpers';
import { Header, Verse, Topic, Section, Paragraph, Reference } from '../common';

export default ({ showTabBar, hideTabBar }) => {
  return (
    <View style={globalStyles.container}>
      <ScrollView
        onScroll={e => ScrollEvent.onStartScroll(e, showTabBar, hideTabBar)}
        scrollEventThrottle={0}>
        <Header title={lesson.title} />
        <Verse scripture={lesson.scripture[0]} />
        <Paragraph>{lesson.introduction}</Paragraph>
        <Topic topic={lesson.topic.first} />
        <Reference topic={lesson.topic.first.reference} />
        <Topic topic={lesson.topic.second} />
        <Reference topic={lesson.topic.second.reference} />
        <Topic topic={lesson.topic.third} />
        <Reference topic={lesson.topic.third.reference} />
        <Paragraph>{lesson.topic.third.anotherMessage}</Paragraph>
        <Reference topic={lesson.topic.third.referenceTwo} />
        <Section lesson={lesson.guideQuestion} />
      </ScrollView>
    </View>
  );
};
