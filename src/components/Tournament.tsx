import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  deleteTournamentAction,
  editTournamentAction,
} from '../store/actions/tournaments';
import theme from '../theme';
import Button from './Button';
import H6 from './H6';
// import { Tournament } from '../types';

const Item = styled.div`
  border-radius: ${theme.borderRadius};
  background-color: ${theme.palette.background.base};
  padding: ${theme.spacing(3)};
`;
const Info = styled.div`
  text-align: left;
`;

const Actions = styled.div`
  text-align: left;
  margin-top: ${theme.spacing(2)};
`;

const EditButton = styled(Button)`
  margin-right: ${theme.spacing(2)};
`;

// formating date

const Tournament = ({ data }: any) => {
  const { name, organizer, game, participants, startDate, id } = data;
  const dispatch: any = useDispatch();

  const d = new Date(startDate).toLocaleString('en-GB');

  const handleClick = () => {
    if (window.confirm('Do you really want to delete this tournament?')) {
      dispatch(deleteTournamentAction(id));
    }
  };

  const handleEdit = () => {
    let name: any = window.prompt('New Tournament Name');
    if (!name) return;
    dispatch(editTournamentAction(id, name));
  };
  return (
    <Item>
      <H6>{name}</H6>
      <Info>Organizer:&nbsp;{organizer}</Info>
      <Info>Game:&nbsp;{game}</Info>
      <Info>
        Participants:&nbsp;{participants.current}/{participants.max}
      </Info>
      <Info>Start:&nbsp;{d}</Info>
      <Actions>
        <EditButton onClick={handleEdit}>EDIT</EditButton>
        <Button onClick={handleClick}>DELETE</Button>
      </Actions>
    </Item>
  );
};

export default Tournament;
