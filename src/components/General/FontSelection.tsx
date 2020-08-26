import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Theme } from '../../constants';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { AppThunk } from '../../config/thunk';

const fontOptions = ['Avenir', 'Poppins', 'Roboto'];

interface Props {
  fontSelected: (font: string, index: number) => AppThunk;
  selectedFontIcon: boolean[];
}

const FontSelection: React.FC<Props> = ({ fontSelected, selectedFontIcon }) => {
  const renderFontButton = () => {
    return fontOptions.map((font: string, i: number) => (
      <View key={i}>
        <TouchableOpacity onPress={() => fontSelected(font, i)}>
          <View style={[styles.button, styles.firstBtn]}>
            <Icon
              name={selectedFontIcon[i] ? 'check-circle' : 'circle'}
              size={18}
              color={
                selectedFontIcon[i] ? Theme.SUCCESS_COLOR : Theme.DARK_COLOR
              }
            />
            <Text style={[styles.text, (styles as any)[font]]}>{font}</Text>
          </View>
        </TouchableOpacity>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {renderFontButton()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    borderWidth: 1,
    borderColor: Theme.BORDER_COLOR,
    borderRadius: 10,
    margin: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    flexBasis: 50,
  },
  firstBtn: {
    marginLeft: 15,
  },
  text: {
    fontSize: 18,
    marginLeft: 5,
  },
  Avenir: {
    fontFamily: 'Avenir-Roman',
  },
  Poppins: {
    fontFamily: 'Poppins-Regular',
  },
  Roboto: {
    fontFamily: 'Roboto-Regular',
  },
});

export default FontSelection;
