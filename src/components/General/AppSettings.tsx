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
import { SettingsScreenProp } from '../../types/Navigation';
import { AppThunk } from '../../config/thunk';

const { height } = Dimensions.get('window');
const modalHeight = (height / 100) * 75;

interface Props {
  navigation: SettingsScreenProp;
  increaseFont: () => AppThunk;
  decreaseFont: () => AppThunk;
}

const AppSettings: React.FC<Props> = ({
  navigation,
  increaseFont,
  decreaseFont,
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
  },
  decrease: {
    marginRight: 5,
    backgroundColor: Theme.BORDER_COLOR,
    borderRadius: 10,
  },
  icon: {
    textAlign: 'center',
    paddingVertical: 8,
    paddingHorizontal: 25,
  },
  increase: {
    marginLeft: 5,
    backgroundColor: Theme.BORDER_COLOR,
    borderRadius: 10,
  },
});

export default AppSettings;
