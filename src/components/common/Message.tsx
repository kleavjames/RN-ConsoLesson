import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import { Theme } from '../../constants';
import { AppState } from '../../reducers';

interface Props {
  message: string;
}

const Message: React.FC<Props> = ({ message }) => {
  const selectorAppSettings = (state: AppState) => state.appSettings;
  const { headerFontSize, fontSelected } = useSelector(selectorAppSettings);

  return (
    <View style={styles.last}>
      <Text style={styles.lastText(headerFontSize, fontSelected.boldFont)}>
        {message}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create<any>({
  last: {
    marginHorizontal: 40,
    marginBottom: 30,
  },
  lastText: (fontSize: number, font: string) => ({
    fontSize,
    fontFamily: font,
    textAlign: 'center',
    color: Theme.LABEL_COLOR,
  }),
});

export default Message;
