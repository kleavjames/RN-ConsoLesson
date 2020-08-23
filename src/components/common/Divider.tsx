import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Theme } from '../../constants';

const Divider: React.FC<{}> = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    borderWidth: 1,
    borderColor: Theme.BORDER_COLOR,
  },
});

export default Divider;
