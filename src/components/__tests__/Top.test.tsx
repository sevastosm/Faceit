import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Top from '../Top';
import store from '../../store';

test('renders input correctly', () => {
  render(
    <Provider store={store}>
      <Top />
    </Provider>
  );
  const input = screen.getByPlaceholderText(/Search tournament.../i);
  expect(input).toBeInTheDocument();
});

test('renders create tournament button correctly', () => {
  render(
    <Provider store={store}>
      <Top />
    </Provider>
  );
  const button = screen.getByText(/CREATE TOURNAMENT/i);
  expect(button).toBeInTheDocument();
});
