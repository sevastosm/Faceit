import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import GlobalStyle from './GlobalStyle';
import store from './store';
import Container from './components/Container';
import H4 from './components/H4';
import Button from './components/Button';
import Input from './components/Input';
import Top from './components/Top';
import Tournament from './components/Tournament';

const App = () => {
  return (
    <Container>
      <H4>FACEIT Tournaments</H4>
      <Top>
        <Input placeholder="Search tournament..." />
        <Button>CREATE TOURNAMENT</Button>
      </Top>
      <Tournament />
    </Container>
  );
};

const container = document.getElementById('root');
if (!container) {
  throw new Error('No container found');
}
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);
