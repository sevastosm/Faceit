import * as action from '../actions/tournaments';
import * as actionTypes from '../actions/actionTypes';

it('should create an action when fetch has started', () => {
  const expectedAction = {
    type: actionTypes.FETCH_TOURNAMENTS_START,
    payload: true,
  };
  expect(action.fetchTournamentsStart()).toEqual(expectedAction);
});

it('should create an action when fetch is succsess', () => {
  const expectedAction = {
    type: actionTypes.FETCH_TOURNAMENTS_SUCCESS,
    payload: [],
  };
  expect(action.fetchTournamentsSuccess([])).toEqual(expectedAction);
});

it('should create an action when fetch is failed', () => {
  const expectedAction = {
    type: actionTypes.FETCH_TOURNAMENTS_FAIL,
    payload: true,
  };
  expect(action.fetchTournamentsFail()).toEqual(expectedAction);
});

it('should create an action when tournament not updated', () => {
  const expectedAction = {
    type: actionTypes.SET_TOURNAMENTS,
    payload: [],
  };
  expect(action.setTournamentsFromFallback([])).toEqual(expectedAction);
});
