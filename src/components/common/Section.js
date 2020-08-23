import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Paragraph, SectionHeader } from '.';

const RenderSectionItems = ({ messages }) => {
  return messages.map((message, i) => <Paragraph key={i}>{message}</Paragraph>);
};

export default props => {
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
