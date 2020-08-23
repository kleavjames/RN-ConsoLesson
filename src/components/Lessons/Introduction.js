import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import lesson from '../../assets/data/introduction.json';
import { Theme } from '../../constants';
import { globalStyles } from '../../styles';
import { ScrollEvent } from '../../helpers';
import { Paragraph, Section, Header, Reference } from '../common';

const RenderParagraph = ({ sentences }) => {
  return sentences.map((sentence, i) => (
    <Paragraph key={i}>{sentence}</Paragraph>
  ));
};

export default ({ showTabBar, hideTabBar, headerFontSize }) => {
  return (
    <View style={globalStyles.container}>
      <ScrollView
        onScroll={e => ScrollEvent.onStartScroll(e, showTabBar, hideTabBar)}
        scrollEventThrottle={0}>
        <Header title={lesson.title} />
        <RenderParagraph sentences={lesson.introductionOne} />
        <Reference topic={lesson.mainTopic} />
        <RenderParagraph sentences={lesson.introductionTwo} />
        <Section lesson={lesson.declaration} />
        <View style={styles.last}>
          <Text style={styles.lastText(headerFontSize)}>{lesson.request}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  last: {
    marginHorizontal: 40,
    marginBottom: 30,
  },
  lastText: fontSize => ({
    fontSize,
    fontFamily: 'Avenir-Book',
    textAlign: 'center',
    color: Theme.LABEL_COLOR,
  }),
});
