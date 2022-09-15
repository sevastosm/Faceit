import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import GlobalStyle from './GlobalStyle';
import store from './store';
import Container from './components/Container';
import { getTournaments } from './store/actions/tournaments';
import H4 from './components/H4';
import Button from './components/Button';
import Input from './components/Input';
import Top from './components/Top';
import Tournament from './components/Tournament';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch: any = useDispatch();

  const handleChange = (e: any) => dispatch(getTournaments(e.target.value));

  return (
    <Container>
      <H4>FACEIT Tournaments</H4>
      <Top>
        <Input onChange={handleChange} placeholder="Search tournament..." />
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
