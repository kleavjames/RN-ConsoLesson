import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { Theme } from '../../constants';
import { AppState } from '../../reducers';

interface Props {
  children: string;
}

const Paragraph: React.FC<Props> = props => {
  const selectAppSettings = (state: AppState) => state.appSettings;
  const { fontSize, fontSelected } = useSelector(selectAppSettings);

  return (
    <View style={styles.container}>
      <Text style={styles.text(fontSize, fontSelected.regularFont)}>
        {'\t\t'}
        {props.children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create<any>({
  container: {
    marginBottom: 15,
    marginHorizontal: 20,
  },
  text: (fontSize: number, font: string) => ({
    fontSize,
    fontFamily: font,
    color: Theme.TEXT_COLOR,
    textAlign: 'justify',
  }),
});

export default Paragraph;
