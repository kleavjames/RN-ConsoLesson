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
  const { fontSize } = useSelector(selectAppSettings);

  return (
    <View style={styles.container}>
      <Text style={styles.text(fontSize)}>
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
  text: (fontSize: number) => ({
    fontSize,
    fontFamily: 'Avenir-Roman',
    color: Theme.TEXT_COLOR,
    textAlign: 'justify',
  }),
});

export default Paragraph;
