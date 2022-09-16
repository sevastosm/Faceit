import {
  fetchTournaments,
  createTournament,
  deleteTournament,
  editTournament,
} from '../api';
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
  return {
    type: actionTypes.FETCH_TOURNAMENTS_SUCCESS,
    payload: data.reverse(),
  };
};

export const setTournamentsFromFallback = (data: any) => {
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

export const getTournaments = (query: string = '') => {
  return (dispatch: any) => {
    dispatch(fetchTournamentsStart());
    fetchTournaments(query)
      .then((response) => {
        dispatch(fetchTournamentsSuccess(response));
      })
      .catch((error: any) => {
        dispatch(fetchTournamentsFail(error.response));
      });
  };
};

export const newTournament = (name: string) => {
  return (dispatch: any) => {
    createTournament(name)
      .then((response) => {
        dispatch(getTournaments());
      })
      .catch((error: any) => {
        dispatch(fetchTournamentsFail(error.response));
      });
  };
};

export const setSearch = (search: string) => {
  return {
    type: actionTypes.SET_SEARCH,
    payload: search,
  };
};

export const optmDeletetournament = (id: string) => {
  const tournaments = store.getState().tournaments.data;

  const f = tournaments.filter((d: any) => d.id !== id);
  return {
    type: actionTypes.DELETE_TOURNAMENT,
    payload: f,
  };
};

export const optmEditTournament = (id: string, name: string) => {
  const tournaments = store.getState().tournaments.data;
  const f = tournaments.map((d: any) => {
    if (d.id === id) {
      return { ...d, name: name };
    }
    return d;
  });

  return {
    type: actionTypes.UPDATE_TOURNAMENT,
    payload: f,
  };
};

export const deleteTournamentAction = (id: string) => {
  return async (dispatch: any) => {
    const fallback: any = store.getState().tournaments.data;
    dispatch(optmDeletetournament(id));
    await deleteTournament(id).catch((error: any) => {
      dispatch(setTournamentsFromFallback(fallback));
    });
  };
};

export const editTournamentAction = (id: string, name: string) => {
  return async (dispatch: any) => {
    const fallback: any = store.getState().tournaments.data;
    dispatch(optmEditTournament(id, name));
    await editTournament(id, name).catch((error: any) => {
      dispatch(setTournamentsFromFallback(fallback));
    });
  };
};
