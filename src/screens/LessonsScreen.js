import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native';

import { Theme } from '../constants';
import lessons from '../assets/data/list.json';

export default props => {
  const renderLesson = ({ item }) => (
    <View style={styles.lessonContainer}>
      <StatusBar
        backgroundColor="#000"
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
      />
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate(item.route);
        }}>
        <Text style={styles.label}>{item.label}</Text>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.top} />
      <FlatList
        data={lessons}
        renderItem={renderLesson}
        keyExtractor={item => item.id}
      />
      <View style={styles.bottom} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lessonContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginVertical: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 15,
  },
  label: {
    fontFamily: 'Avenir-Light',
    color: Theme.TEXT_COLOR,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Avenir-Book',
    color: Theme.LABEL_COLOR,
  },
  top: {
    marginTop: 5,
  },
  bottom: {
    marginBottom: 5,
  },
});
