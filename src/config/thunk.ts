import { ThunkAction } from 'redux-thunk';
import { AppState } from '../reducers';
import { AppActions } from '../types/actions';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  AppActions
>;
