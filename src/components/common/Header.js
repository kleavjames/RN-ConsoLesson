import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { globalStyles } from '../../styles';

export default props => {
  const { headerFontSize } = useSelector(state => state.generalSettings);

  return (
    <View style={globalStyles.headerContainer}>
      <Text style={styles.title(headerFontSize)}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: fontSize => ({
    fontFamily: 'Avenir-Book',
    fontSize,
    textAlign: 'center',
  }),
});
