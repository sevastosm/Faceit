import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
test('renders header correctly', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const h4 = screen.getByText(/FACEIT Tournaments/i);
  expect(h4).toBeInTheDocument();
});
