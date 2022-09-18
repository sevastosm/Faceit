import React from 'react';
import { render as renderWithRedux, screen } from './test-utils';
import App from './App';
test('renders header correctly', async () => {
  const store: any = {
    tournaments: {
      items: [],
      loading: true,
      errorInSearch: false,
      search: '',
    },
  };
  renderWithRedux(<App />, {
    initialState: store,
  });
  const h4 = screen.getByText(/FACEIT Tournaments/i);
  expect(h4).toBeInTheDocument();
});
