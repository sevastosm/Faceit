import React from 'react';
import Container from './components/Container';
import H4 from './components/H4';
import Top from './components/Top';
import Tournaments from './components/Tournaments';

const App: React.FC = () => {
  return (
    <Container>
      <H4>FACEIT Tournaments</H4>
      <Top />
      <Tournaments />
    </Container>
  );
};

export default App;
