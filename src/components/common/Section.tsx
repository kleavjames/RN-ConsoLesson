import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Paragraph, SectionHeader } from '.';

interface Topic {
  message: string[] | string;
  label: string;
}

interface Props {
  lesson: Topic;
}

const RenderSectionItems = ({ messages }: { messages: string[] | any }) => {
  return messages.map((message: string, i: number) => (
    <Paragraph key={i}>{message}</Paragraph>
  ));
};

const Section: React.FC<Props> = props => {
  const renderByType = () => {
    if (!Array.isArray(props.lesson.message)) {
      return <Paragraph>{props.lesson.message}</Paragraph>;
    }

    return <RenderSectionItems messages={props.lesson.message} />;
  };

  return (
    <View>
      <SectionHeader label={props.lesson.label} />
      <View style={styles.space} />
      {renderByType()}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  space: {
    marginBottom: 10,
  },
});

export default Section;
