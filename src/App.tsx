import React from 'react';
import Container from './components/Container';
import {
  getTournaments,
  newTournament,
  setSearch,
} from './store/actions/tournaments';
import H4 from './components/H4';
import Button from './components/Button';
import Input from './components/Input';
import Top from './components/Top';
import Tournaments from './components/Tournaments';
import { useDispatch, useSelector } from 'react-redux';
import { selectItems } from './store/selectors/tournaments';
import { StaticRouter } from 'react-router-dom';

const App = () => {
  const dispatch: any = useDispatch();

  const items = useSelector(selectItems);
  const search = useSelector((store: any) => store.tournaments.search);

  React.useEffect(() => {
    dispatch(getTournaments(search));
  }, [search]);

  const handleChange = (e: any) => dispatch(setSearch(e.target.value));

  const handleClick = () => {
    let name: any = window.prompt('New Tournament Name');
    if (!name) return;
    dispatch(newTournament(name));
  };

  return (
    <Container>
      <H4>FACEIT Tournaments</H4>
      <Top>
        <Input
          onChange={handleChange}
          placeholder="Search tournament..."
          value={search}
        />
        <Button onClick={handleClick}>CREATE TOURNAMENT</Button>
      </Top>
      <Tournaments />
    </Container>
  );
};

export default App;
