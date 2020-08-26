import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import Lessons from '../../components/Lessons/Lessons';
import { AppState } from '../../reducers';
import { LessonsScreenProp } from '../../types/Navigation';

const LessonsContainer: React.FC<{}> = () => {
  const selectAppSettings = (state: AppState) => state.appSettings;
  const { fontSize, fontSelected } = useSelector(selectAppSettings);

  const navigation = useNavigation<LessonsScreenProp>();

  return (
    <Lessons
      navigation={navigation}
      fontSize={fontSize}
      fontSelected={fontSelected}
    />
  );
};

export default LessonsContainer;
