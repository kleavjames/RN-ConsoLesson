import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Theme } from '../../constants';

export default () => <View style={styles.divider} />;

const styles = StyleSheet.create({
  divider: {
    borderWidth: 1,
    borderColor: Theme.BORDER_COLOR,
  },
});
