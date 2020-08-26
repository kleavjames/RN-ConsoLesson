import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { Theme } from '../../constants';
import { AppState } from '../../reducers';

interface Props {
  label: string;
}

const SectionHeader: React.FC<Props> = props => {
  const selectAppSettings = (state: AppState) => state.appSettings;
  const { fontSize, fontSelected } = useSelector(selectAppSettings);

  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.label(fontSize, fontSelected.boldFont)}>
          {props.label}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create<any>({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  sectionHeader: {
    backgroundColor: Theme.PRIMARY_COLOR,
    borderRadius: 30,
  },
  label: (fontSize: number, font: string) => ({
    color: Theme.WHITE_COLOR,
    paddingVertical: 7,
    paddingHorizontal: 15,
    fontFamily: font,
    fontSize: fontSize - 4,
  }),
});

export default SectionHeader;
