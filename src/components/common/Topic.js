import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { Theme } from '../../constants';
import { Paragraph, Verse, Reference } from '.';

const RenderVerse = ({ verses }) => {
  return verses.map((verse, i) => <Verse key={i} scripture={verse} />);
};

export default props => {
  const { fontSize } = useSelector(state => state.generalSettings);

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={[styles.topicText(fontSize), styles.number]}>
          {props.topic.number}.
        </Text>
        <Text style={styles.topicText(fontSize)}>{props.topic.title}</Text>
      </View>
      {props.topic.message ? (
        <Paragraph>{props.topic.message}</Paragraph>
      ) : (
        <View style={styles.space} />
      )}
      {props.topic.scripture ? (
        <RenderVerse verses={props.topic.scripture} />
      ) : null}
      {props.topic.subTopic ? (
        <Reference topic={props.topic.subTopic[0]} />
      ) : null}
      {props.topic.messageTwo ? (
        <Paragraph>{props.topic.messageTwo}</Paragraph>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 30,
  },
  number: {
    marginRight: 10,
  },
  space: {
    marginBottom: 15,
  },
  topicText: fontSize => ({
    fontFamily: 'Avenir-Book',
    fontSize,
    color: Theme.DARK_COLOR,
    fontWeight: 'bold',
    marginBottom: 5,
  }),
});
