import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { Theme } from '../../constants';
import { AppState } from '../../reducers';

export interface ReferenceType {
  title: string;
  items: string[];
}

interface Props {
  topic: ReferenceType;
}

const Reference: React.FC<Props> = props => {
  const selectAppSettings = (state: AppState) => state.appSettings;
  const { fontSize, headerFontSize, fontSelected } = useSelector(
    selectAppSettings,
  );

  const renderTopicItems = () =>
    props.topic.items.map((item, i) => (
      <Text key={i} style={styles.item(fontSize, fontSelected.lightFont)}>
        {i + 1}. {item}
      </Text>
    ));

  return (
    <View style={styles.container}>
      {props.topic.title ? (
        <Text style={styles.title(headerFontSize, fontSelected.boldFont)}>
          {props.topic.title}
        </Text>
      ) : null}
      {renderTopicItems()}
    </View>
  );
};

const styles = StyleSheet.create<any>({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: Theme.BORDER_COLOR,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  title: (fontSize: number, font: string) => ({
    fontFamily: font,
    fontSize,
    color: Theme.LABEL_COLOR,
    marginBottom: 10,
  }),
  item: (fontSize: number, font: string) => ({
    fontFamily: font,
    fontSize,
    paddingVertical: 3,
  }),
});

export default Reference;
