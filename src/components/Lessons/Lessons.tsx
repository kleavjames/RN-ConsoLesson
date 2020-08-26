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

import { Theme } from '../../constants';
import lessons from '../../assets/data/list.json';
import { LessonsScreenProp } from '../../types/Navigation';
import { FontFamily } from '../../types/AppSettings';

interface Props {
  navigation: LessonsScreenProp;
  fontSize: number;
  fontSelected: FontFamily;
}

interface renderProps {
  route: any;
  label: string;
  title: string;
}

const Lessons: React.FC<Props> = props => {
  const renderLesson = ({ item }: { item: renderProps }) => (
    <View style={styles.lessonContainer}>
      <StatusBar
        backgroundColor="#000"
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
      />
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate(item.route);
        }}>
        <Text
          style={styles.label(props.fontSize, props.fontSelected.lightFont)}>
          {item.label}
        </Text>
        <Text style={styles.title(props.fontSelected.boldFont, props.fontSize)}>
          {item.title}
        </Text>
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

const styles = StyleSheet.create<any>({
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
  label: (fontSize: number, font: string) => ({
    fontFamily: font,
    fontSize,
    color: Theme.TEXT_COLOR,
  }),
  title: (font: string, fontSize: number) => ({
    fontSize,
    fontFamily: font,
    color: Theme.LABEL_COLOR,
  }),
  top: {
    marginTop: 5,
  },
  bottom: {
    marginBottom: 5,
  },
});

export default Lessons;
