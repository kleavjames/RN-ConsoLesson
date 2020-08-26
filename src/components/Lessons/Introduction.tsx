import React from 'react';
import { View, ScrollView } from 'react-native';

import lesson from '../../assets/data/introduction.json';
import { globalStyles } from '../../config/styles';
import { ScrollEvent } from '../../helpers';
import { Paragraph, Section, Header, Reference, Message } from '../common';
import { AppActions } from '../../types/actions';

interface Props {
  showTabBar: () => AppActions;
  hideTabBar: () => AppActions;
}

interface ParagraphProps {
  sentences: string[];
}

const RenderParagraph: React.FC<ParagraphProps | any> = ({ sentences }) => {
  return sentences.map((sentence: string, i: number) => (
    <Paragraph key={i}>{sentence}</Paragraph>
  ));
};

const Introduction: React.FC<Props> = ({ showTabBar, hideTabBar }) => {
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
        <Message message={lesson.request} />
      </ScrollView>
    </View>
  );
};

export default Introduction;
