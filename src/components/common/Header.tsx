import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { globalStyles } from '../../config/styles';
import { AppState } from '../../reducers';

interface Props {
  title: string;
}

const Header: React.FC<Props> = props => {
  const selectAppSettings = (state: AppState) => state.appSettings;
  const { headerFontSize } = useSelector(selectAppSettings);

  return (
    <View style={globalStyles.headerContainer}>
      <Text style={styles.title(headerFontSize)}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create<any>({
  title: (fontSize: number) => ({
    fontFamily: 'Avenir-Book',
    fontSize,
    textAlign: 'center',
  }),
});

export default Header;
