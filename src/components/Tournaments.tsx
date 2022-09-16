import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectItems } from '../store/selectors/tournaments';
import styled from 'styled-components';
import theme from '../theme';
import { Tournament as TTournament } from '../types';
import Tournament from './Tournament';
import Button from './Button';
import { getTournaments } from '../store/actions/tournaments';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${theme.spacing(6)};
  margin-top: ${theme.spacing(6)};
`;

const NoResults = styled.div`
  margin-top: ${theme.spacing(6)};
  text-align: center;
`;

const Tournaments = () => {
  const dispatch: any = useDispatch();
  const items = useSelector(selectItems);
  const isLoading = useSelector((store: any) => store.tournaments.loading);
  const error = useSelector((store: any) => store.tournaments.errorInSearch);

  if (error)
    return (
      <NoResults>
        Something went wrong.
        <NoResults>
          <Button onClick={() => dispatch(getTournaments())}>Rerty</Button>
        </NoResults>
      </NoResults>
    );
  if (isLoading) return <NoResults> Loading tournaments ...</NoResults>;
  if (items.length === 0 && !isLoading)
    return <NoResults> No tournaments found.</NoResults>;

  return (
    <Wrapper>
      {items.map((item: TTournament, i: number) => {
        return <Tournament data={{ ...item }} key={i} />;
      })}
    </Wrapper>
  );
};

export default Tournaments;
