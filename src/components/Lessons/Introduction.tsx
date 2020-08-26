import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import lesson from '../../assets/data/introduction.json';
import { Theme } from '../../constants';
import { globalStyles } from '../../config/styles';
import { ScrollEvent } from '../../helpers';
import { Paragraph, Section, Header, Reference } from '../common';
import { AppActions } from '../../types/actions';

interface Props {
  showTabBar: () => AppActions;
  hideTabBar: () => AppActions;
  headerFontSize: number;
  boldFontSelected: string;
}

interface ParagraphProps {
  sentences: string[];
}

const RenderParagraph: React.FC<ParagraphProps | any> = ({ sentences }) => {
  return sentences.map((sentence: string, i: number) => (
    <Paragraph key={i}>{sentence}</Paragraph>
  ));
};

const Introduction: React.FC<Props> = ({
  showTabBar,
  hideTabBar,
  headerFontSize,
  boldFontSelected,
}) => {
  console.log('bold font selected', boldFontSelected);

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
          <Text style={styles.lastText(headerFontSize, boldFontSelected)}>
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

export default Introduction;
