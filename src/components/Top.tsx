import React from 'react';
import { useDispatch } from 'react-redux';
import { getTournaments, newTournament } from '../store/actions/tournaments';
import { AppDispatch } from '../types';
import Button from './Button';
import Input from './Input';
import theme from '../theme';
import styled from 'styled-components';
const TopAtions = styled.div`
  max-width: 960px;
  margin-top: ${theme.spacing(6)};
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
`;

const Top: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(getTournaments(e.target.value));
  const handleClick = () => {
    const name: string | null = window.prompt('New Tournament Name');
    if (!name) return;
    dispatch(newTournament(name));
  };

  return (
    <TopAtions>
      <Input onChange={handleChange} placeholder="Search tournament..." />
      <Button onClick={handleClick}>CREATE TOURNAMENT</Button>
    </TopAtions>
  );
};

export default Top;
