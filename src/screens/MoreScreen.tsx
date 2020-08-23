import React from 'react';
import { StyleSheet, View } from 'react-native';

import { MenuItem } from '../components/common';

export default () => {
  return (
    <View style={styles.container}>
      <MenuItem fontName="info" label="About" route="About" />
      <MenuItem fontName="log-out" label="Sign Out" route="SignOut" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
