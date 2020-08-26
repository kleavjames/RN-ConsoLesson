import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

import lesson from '../../assets/data/lesson-4.json';
import { AppActions } from '../../types/actions';
import { globalStyles } from '../../config/styles';
import { Theme } from '../../constants';
import { ScrollEvent } from '../../helpers';
import { Header, Verse, Section, Topic, Reference } from '../common';

interface Props {
  showTabBar: () => AppActions;
  hideTabBar: () => AppActions;
  headerFontSize: number;
  fontSelected: string;
}

const LessonFour: React.FC<Props> = ({
  showTabBar,
  hideTabBar,
  headerFontSize,
  fontSelected,
}) => {
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
        <View style={styles.last}>
          <Text style={styles.lastText(headerFontSize, fontSelected)}>
            {lesson.request}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create<any>({
  last: {
    marginHorizontal: 40,
    marginBottom: 30,
  },
  lastText: (fontSize: number, font: string) => ({
    fontSize,
    fontFamily: font,
    textAlign: 'center',
    color: Theme.LABEL_COLOR,
  }),
});

export default LessonFour;
