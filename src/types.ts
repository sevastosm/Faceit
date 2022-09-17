import store from './store';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type Nullable<T> = T | null | undefined;
export type ValueOf<T> = T[keyof T];

export type Tournament = {
  id: string;
  name: string;
  organizer: string;
  game: string;
  participants: Participants;
  startDate: string;
};

export type Participants = {
  current: number;
  max: number;
};

export type ApplicationStore = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<ApplicationStore, any, AnyAction>;
