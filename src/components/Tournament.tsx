import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  deleteTournamentAction,
  editTournamentAction,
} from '../store/actions/tournaments';
import { Tournament as typeTournament, AppDispatch } from '../types';
import Button from './Button';
import H6 from './H6';
import theme from '../theme';
import { formatDate } from '../utils';

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

type Props = { data: typeTournament };

const Tournament: React.FC<Props> = ({ data }: Props) => {
  const { name, organizer, game, participants, startDate, id } = data;
  const dispatch: AppDispatch = useDispatch();
  const date = formatDate(startDate);

  const handleClick = () => {
    if (window.confirm('Do you really want to delete this tournament?')) {
      dispatch(deleteTournamentAction(id));
    }
  };

  const handleEdit = () => {
    const name = window.prompt('New Tournament Name');
    if (!name) return;
    dispatch(editTournamentAction(id, name));
  };

  return (
    <Item data-testid="TOURNAMENT_ITEM">
      <H6>{name}</H6>
      <Info>Organizer:&nbsp;{organizer}</Info>
      <Info>Game:&nbsp;{game}</Info>
      <Info>
        Participants:&nbsp;{participants.current}/{participants.max}
      </Info>
      <Info>Start:&nbsp;{date}</Info>
      <Actions>
        <EditButton onClick={handleEdit}>EDIT</EditButton>
        <Button onClick={handleClick}>DELETE</Button>
      </Actions>
    </Item>
  );
};

export default Tournament;
