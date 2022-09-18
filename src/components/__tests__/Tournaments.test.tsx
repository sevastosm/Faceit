import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import {
  FETCH_TOURNAMENTS_FAIL,
  FETCH_TOURNAMENTS_START,
  FETCH_TOURNAMENTS_SUCCESS,
} from '../../store/actions/actionTypes';
import store from '../../store';
import Tournaments from '../Tournaments';
import App from '../../App';

test('renders loading tournaments... message', () => {
  act(() => {
    store.dispatch({
      type: FETCH_TOURNAMENTS_START,
      payload: true,
    });
  });
  render(
    <Provider store={store}>
      <Tournaments />
    </Provider>
  );
  const input = screen.getByText(/Loading tournaments.../i);
  expect(input).toBeInTheDocument();
});

test('renders No tournaments found message', () => {
  act(() => {
    store.dispatch({
      type: FETCH_TOURNAMENTS_SUCCESS,
      payload: [],
    });
  });
  render(
    <Provider store={store}>
      <Tournaments />
    </Provider>
  );
  const input = screen.getByText(/Loading tournaments.../i);
  expect(input).toBeInTheDocument();
});

test('renders No tournaments found message', () => {
  act(() => {
    store.dispatch({
      type: FETCH_TOURNAMENTS_FAIL,
      payload: true,
    });
  });
  render(
    <Provider store={store}>
      <Tournaments />
    </Provider>
  );
  const input = screen.getByText(/Something went wrong./i);
  const rertyButton = screen.getByText(/Retry/i);

  expect(input).toBeInTheDocument();
  expect(rertyButton).toBeInTheDocument();
});

test('renders tournaments list', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  act(() => {
    store.dispatch({
      type: 'FETCH_TOURNAMENTS_SUCCESS',
      payload: [
        {
          id: 'ffb37039-bf24-43f3-8dbf-d03bbcd86faa',
          name: 'Test',
          organizer: 'Sit',
          game: 'League of Legends',
          participants: {
            current: 76,
            max: 256,
          },
          startDate: '2022-09-17T20:21:43.484Z',
        },
        {
          id: 'd0473a98-e795-4cac-b37e-6a74acf54fe2',
          name: 'Minima Quo Ut',
          organizer: 'Voluptates',
          game: 'League of Legends',
          participants: {
            current: 46,
            max: 256,
          },
          startDate: '2022-09-17T20:20:22.376Z',
        },
        {
          id: '184e266f-9b3f-4905-aae0-11db964a9247',
          name: 'Quis Non Quibusdam Id',
          organizer: 'Quaerat Tenetur',
          game: 'Battalion 1944',
          participants: {
            current: 143,
            max: 256,
          },
          startDate: '2022-09-17T20:20:22.376Z',
        },
      ],
    });
  });
  const tournamentsList = screen.getByTestId('TOURNAMENTS_LIST');
  expect(tournamentsList).toBeInTheDocument();
});
