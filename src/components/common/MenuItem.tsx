import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { Theme } from '../../constants';

interface Props {
  route: string;
  fontName: string;
  label: string;
}

const MenuItem: React.FC<Props> = props => {
  const navigation = useNavigation();

  const onNavigate = () => {
    if (props.route === 'SignOut') {
      // do something
    } else {
      navigation.navigate(props.route);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onNavigate}>
        <View style={styles.buttonContainer}>
          <FeatherIcon
            name={props.fontName}
            size={18}
            color={Theme.DARK_COLOR}
          />
          <Text style={styles.text}>{props.label}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text: {
    fontFamily: 'Avenir-Light',
    fontSize: 18,
    marginLeft: 20,
  },
});

export default MenuItem;
