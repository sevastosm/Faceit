import { fetchTournaments } from '../api';
import { RootState } from '../reducers';
import * as actionTypes from './actionTypes';
import store from '..';
export type AppDispatch = typeof store.dispatch;

export const fetchTournamentsStart = () => {
  return {
    type: actionTypes.FETCH_TOURNAMENTS_START,
  };
};

export const fetchTournamentsSuccess = (data: any) => {
  console.log('DATA', data);
  return {
    type: actionTypes.FETCH_TOURNAMENTS_SUCCESS,
    payload: data,
  };
};

export const fetchTournamentsFail = (error: string) => {
  return {
    type: actionTypes.FETCH_TOURNAMENTS_FAIL,
    error,
  };
};

export const getTournaments = (query: any) => {
  return (dispatch: any) => {
    dispatch(fetchTournamentsStart());
    fetchTournaments(query)
      .then((response) => {
        console.log('SUCCSESS RESPONSE', response);
        dispatch(fetchTournamentsSuccess(response));
      })
      .catch((error: any) => {
        console.log('ERROR IS SHEARCH', error);
        dispatch(fetchTournamentsFail(error.response));
      });
  };
};
