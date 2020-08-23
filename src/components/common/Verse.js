import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';

import { Theme } from '../../constants';

export default props => {
  const { fontSize, headerFontSize } = useSelector(
    state => state.generalSettings,
  );

  const subReference = reference => {
    return reference.map((ref, i) => (
      <View key={i} style={styles.reference}>
        <Text style={styles.refText(fontSize)}>{ref}</Text>
      </View>
    ));
  };

  const renderMultipleVerse = () => {
    if (Array.isArray(props.scripture.books)) {
      return props.scripture.books.map((script, i) => {
        return (
          <View key={i}>
            <Text style={styles.text(fontSize)}>{script.message}</Text>
            <View style={styles.bookContainer}>
              <Icon
                style={styles.icon}
                name="book-open"
                size={fontSize - 2}
                color={Theme.DARK_COLOR}
              />
              <Text style={styles.book(fontSize)}>{script.book}</Text>
            </View>
            {script.reference ? (
              <>
                <View style={styles.space} />
                {subReference(script.reference)}
              </>
            ) : null}
            <View style={styles.space} />
          </View>
        );
      });
    }

    return (
      <View>
        <Text style={styles.text(fontSize)}>{props.scripture.message}</Text>
        <View style={styles.bookContainer}>
          <Icon
            style={styles.icon}
            name="book-open"
            size={fontSize - 2}
            color={Theme.DARK_COLOR}
          />
          <Text style={styles.book(fontSize)}>{props.scripture.book}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {props.scripture.title ? (
        <Text style={styles.title(headerFontSize)}>
          {props.scripture.title}
        </Text>
      ) : null}
      {renderMultipleVerse()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Theme.BORDER_COLOR,
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  bookContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  book: fontSize => ({
    fontFamily: 'Avenir-Book',
    fontWeight: 'bold',
    fontSize,
    fontStyle: 'italic',
    marginTop: 5,
    color: Theme.DARK_COLOR,
  }),
  icon: {
    marginTop: 5,
    marginRight: 7,
  },
  title: fontSize => ({
    fontFamily: 'Avenir-Book',
    fontSize,
    color: Theme.DARK_COLOR,
    marginBottom: 5,
  }),
  text: fontSize => ({
    fontFamily: 'Avenir-Light',
    color: Theme.TEXT_COLOR,
    fontSize,
    textAlign: 'center',
  }),
  refText: fontSize => ({
    fontFamily: 'Avenir-Light',
    color: Theme.DARK_COLOR,
    fontSize,
  }),
  space: {
    marginBottom: 10,
  },
  reference: {
    marginVertical: 2,
  },
});
