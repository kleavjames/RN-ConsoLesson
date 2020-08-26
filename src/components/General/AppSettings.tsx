import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Theme } from '../../constants';
import { AppSettingsScreenProp } from '../../types/Navigation';
import { AppThunk } from '../../config/thunk';
import FontSelection from './FontSelection';

const { height } = Dimensions.get('window');
const modalHeight = (height / 100) * 75;

interface Props {
  navigation: AppSettingsScreenProp;
  increaseFont: () => AppThunk;
  decreaseFont: () => AppThunk;
  changeFont: (font: string, index: number) => AppThunk;
  selectedFontIcon: boolean[];
}

const AppSettings: React.FC<Props> = ({
  navigation,
  increaseFont,
  decreaseFont,
  changeFont,
  selectedFontIcon,
}) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <View style={styles.top} />
      </TouchableWithoutFeedback>
      <View style={styles.modal}>
        <View style={styles.size}>
          <TouchableOpacity
            onPress={() => {
              decreaseFont();
            }}>
            <View style={styles.decrease}>
              <Icon
                name="format-font-size-decrease"
                color={Theme.DARK_COLOR}
                size={28}
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              increaseFont();
            }}>
            <View style={styles.increase}>
              <Icon
                name="format-font-size-increase"
                color={Theme.DARK_COLOR}
                size={28}
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>
        </View>
        <FontSelection
          fontSelected={changeFont}
          selectedFontIcon={selectedFontIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 1,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: height - modalHeight,
    borderTopWidth: 1,
    borderTopColor: Theme.LIGHT_COLOR,
  },
  size: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  decrease: {
    marginRight: 5,
    backgroundColor: Theme.LIGHT_COLOR,
    borderRadius: 5,
  },
  icon: {
    textAlign: 'center',
    paddingVertical: 8,
    paddingHorizontal: 25,
  },
  increase: {
    marginLeft: 5,
    backgroundColor: Theme.LIGHT_COLOR,
    borderRadius: 5,
  },
});

export default AppSettings;
