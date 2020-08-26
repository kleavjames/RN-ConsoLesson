import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';

import { Theme } from '../../constants';
import { AppState } from '../../reducers';

interface VerseMessage {
  book: string;
  message: string;
  reference?: string[];
}

export interface VerseType {
  books?: VerseMessage;
  title: string;
  message: string;
  book: string;
}

interface Props {
  scripture: VerseType | any;
}

const Verse: React.FC<Props> = props => {
  const selectAppSettings = (state: AppState) => state.appSettings;
  const { fontSize, headerFontSize, fontSelected } = useSelector(
    selectAppSettings,
  );

  const subReference = (reference: string[]) => {
    return reference.map((ref: string, i: number) => (
      <View key={i} style={styles.reference}>
        <Text style={styles.refText(fontSize, fontSelected.lightFont)}>
          {ref}
        </Text>
      </View>
    ));
  };

  const renderMultipleVerse = () => {
    if (Array.isArray(props.scripture.books)) {
      return props.scripture.books.map((script: VerseMessage, i: number) => {
        return (
          <View key={i}>
            <Text style={styles.text(fontSize, fontSelected.lightFont)}>
              {script.message}
            </Text>
            <View style={styles.bookContainer}>
              <Icon
                style={styles.icon}
                name="book-open"
                size={fontSize - 2}
                color={Theme.DARK_COLOR}
              />
              <Text style={styles.book(fontSize, fontSelected.boldFont)}>
                {script.book}
              </Text>
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
        <Text style={styles.text(fontSize, fontSelected.lightFont)}>
          {props.scripture.message}
        </Text>
        <View style={styles.bookContainer}>
          <Icon
            style={styles.icon}
            name="book-open"
            size={fontSize - 2}
            color={Theme.DARK_COLOR}
          />
          <Text style={styles.book(fontSize, fontSelected.boldFont)}>
            {props.scripture.book}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {props.scripture.title ? (
        <Text style={styles.title(headerFontSize, fontSelected.boldFont)}>
          {props.scripture.title}
        </Text>
      ) : null}
      {renderMultipleVerse()}
    </View>
  );
};

const styles = StyleSheet.create<any>({
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
  book: (fontSize: number, font: string) => ({
    fontFamily: font,
    fontSize,
    fontStyle: 'italic',
    marginTop: 5,
    color: Theme.DARK_COLOR,
  }),
  icon: {
    marginTop: 5,
    marginRight: 7,
  },
  title: (fontSize: number, font: string) => ({
    fontFamily: font,
    fontSize,
    color: Theme.DARK_COLOR,
    marginBottom: 5,
  }),
  text: (fontSize: number, font: string) => ({
    fontFamily: font,
    color: Theme.TEXT_COLOR,
    fontSize,
    textAlign: 'center',
  }),
  refText: (fontSize: number, font: string) => ({
    fontFamily: font,
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

export default Verse;
