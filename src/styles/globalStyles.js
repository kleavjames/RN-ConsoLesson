import { StyleSheet } from 'react-native';

import { Theme } from '../constants';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.WHITE_COLOR,
  },
  headerContainer: {
    marginVertical: 30,
    marginHorizontal: 20,
  },
});
