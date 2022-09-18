import React from 'react';
import { render as renderWithRedux, screen } from '../../test-utils';
import Tournaments from '../Tournaments';

test('renders loading tournaments... message', () => {
  const store: any = {
    tournaments: {
      items: [],
      loading: true,
      errorInSearch: false,
      search: '',
    },
  };
  renderWithRedux(<Tournaments />, {
    initialState: store,
  });
  const message = screen.getByText(/Loading tournaments.../i);
  expect(message).toBeInTheDocument();
});

test('renders No tournaments found message', () => {
  const store: any = {
    tournaments: {
      items: [],
      loading: false,
      errorInSearch: false,
      search: '',
    },
  };
  renderWithRedux(<Tournaments />, {
    initialState: store,
  });
  const message = screen.getByText(/No tournaments found./i);
  expect(message).toBeInTheDocument();
});

test('renders Something went wrong message', () => {
  const store: any = {
    tournaments: {
      items: [],
      loading: false,
      errorInSearch: true,
      search: '',
    },
  };
  renderWithRedux(<Tournaments />, {
    initialState: store,
  });
  const message = screen.getByText(/Something went wrong./i);
  const rertyButton = screen.getByText(/Retry/i);
  expect(message).toBeInTheDocument();
  expect(rertyButton).toBeInTheDocument();
});

test('renders tournaments list', () => {
  const store: any = {
    tournaments: {
      items: [
        {
          id: '42d8d918-8db6-4b4d-9f63-38c9071455bd',
          name: 'Numquam Placeat Voluptatem',
          organizer: 'Excepturi',
          game: 'Counter-Strike: Global Offensive',
          participants: {
            current: 104,
            max: 256,
          },
          startDate: '2022-09-18T10:30:40.222Z',
        },
        {
          id: 'ebc4ae03-efcc-494e-b8d5-bf13d9d0d24c',
          name: 'Ut Aut Quisquam Itaque',
          organizer: 'Ut',
          game: 'League of Legends',
          participants: {
            current: 27,
            max: 256,
          },
          startDate: '2022-09-18T10:30:40.220Z',
        },
        {
          id: '987cc77b-9998-4da6-a0b8-3ce7dc2422a7',
          name: 'Et Aut Harum Iusto',
          organizer: 'Harum',
          game: 'League of Legends',
          participants: {
            current: 158,
            max: 256,
          },
          startDate: '2022-09-18T10:30:40.220Z',
        },
      ],
      loading: false,
      errorInSearch: false,
      search: '',
    },
  };
  renderWithRedux(<Tournaments />, {
    initialState: store,
  });
  const tournamentsList = screen.getByTestId('TOURNAMENTS_LIST');
  const items = screen.getAllByTestId('TOURNAMENT_ITEM');
  expect(tournamentsList).toBeInTheDocument();
  expect(items.length) === store.tournaments.items;
});
