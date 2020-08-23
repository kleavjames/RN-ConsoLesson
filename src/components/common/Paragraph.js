import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { Theme } from '../../constants';
import { globalStyles } from '../../styles';

export default props => {
  const { fontSize } = useSelector(state => state.generalSettings);

  return (
    <View style={styles.container}>
      <Text style={styles.text(fontSize)}>
        {'\t\t'}
        {props.children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    marginHorizontal: 20,
  },
  text: fontSize => ({
    fontSize,
    fontFamily: 'Avenir-Roman',
    color: Theme.TEXT_COLOR,
    textAlign: 'justify',
  }),
});
