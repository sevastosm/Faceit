import {
  fetchTournaments,
  createTournament,
  deleteTournament,
  editTournament,
} from '../api';
import store from '..';
import * as actionTypes from './actionTypes';
import { AppDispatch, Tournament } from '../../types';

export const fetchTournamentsStart = () => {
  return {
    type: actionTypes.FETCH_TOURNAMENTS_START,
    payload: true,
  };
};

export const fetchTournamentsSuccess = (data: Tournament[]) => {
  return {
    type: actionTypes.FETCH_TOURNAMENTS_SUCCESS,
    payload: data.reverse(),
  };
};

export const setTournamentsFromFallback = (data: Tournament[]) => {
  return {
    type: actionTypes.SET_TOURNAMENTS,
    payload: data,
  };
};

export const fetchTournamentsFail = () => {
  return {
    type: actionTypes.FETCH_TOURNAMENTS_FAIL,
    payload: true,
  };
};

export const getTournaments = (query: string = '') => {
  return (dispatch: AppDispatch) => {
    dispatch(fetchTournamentsStart());
    fetchTournaments(query)
      .then((response) => {
        dispatch(fetchTournamentsSuccess(response));
      })
      .catch(() => {
        dispatch(fetchTournamentsFail());
      });
  };
};

export const newTournament = (name: string) => {
  return (dispatch: AppDispatch) => {
    createTournament(name)
      .then(() => {
        dispatch(getTournaments());
      })
      .catch(() => {
        dispatch(fetchTournamentsFail());
      });
  };
};

export const setSearch = (search: string) => {
  return {
    type: actionTypes.SET_SEARCH,
    payload: search,
  };
};

export const optimisticDeletetournament = (id: string) => {
  const tournaments = store.getState().tournaments.items;

  const f = tournaments.filter((d: Tournament) => d.id !== id);
  return {
    type: actionTypes.DELETE_TOURNAMENT,
    payload: f,
  };
};

export const optmisticEditTournament = (id: string, name: string) => {
  const tournaments = store.getState().tournaments.items;
  const updatedList = tournaments.map((item: Tournament) => {
    if (item.id === id) {
      return { ...item, name: name };
    }
    return item;
  });

  return {
    type: actionTypes.UPDATE_TOURNAMENT,
    payload: updatedList,
  };
};

export const deleteTournamentAction = (id: string) => {
  return async (dispatch: AppDispatch) => {
    const fallback: Tournament[] = store.getState().tournaments.items;
    dispatch(optimisticDeletetournament(id));
    await deleteTournament(id).catch(() => {
      dispatch(setTournamentsFromFallback(fallback));
    });
  };
};

export const editTournamentAction = (id: string, name: string) => {
  return async (dispatch: AppDispatch) => {
    const fallback: Tournament[] = store.getState().tournaments.items;
    dispatch(optmisticEditTournament(id, name));
    await editTournament(id, name).catch((error: any) => {
      dispatch(setTournamentsFromFallback(fallback));
    });
  };
};
