import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTournaments } from '../store/actions/tournaments';
import { selectItems, search } from '../store/selectors/tournaments';
import {
  ApplicationStore,
  Tournament as typeTournament,
  AppDispatch,
} from '../types';
import Tournament from './Tournament';
import Button from './Button';
import theme from '../theme';
import styled from 'styled-components';

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

const Tournaments: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const items = useSelector(selectItems);
  const searchTerm = useSelector(search);
  const isLoading = useSelector(
    (store: ApplicationStore) => store.tournaments.loading
  );
  const error = useSelector(
    (store: ApplicationStore) => store.tournaments.errorInSearch
  );

  React.useEffect(() => {
    dispatch(getTournaments());
  }, []);

  if (error)
    return (
      <NoResults>
        Something went wrong.
        <NoResults>
          <Button onClick={() => dispatch(getTournaments(searchTerm))}>
            Retry
          </Button>
        </NoResults>
      </NoResults>
    );
  if (isLoading) return <NoResults>Loading tournaments...</NoResults>;
  if (items.length === 0 && !isLoading)
    return <NoResults>No tournaments found.</NoResults>;

  return (
    <Wrapper data-testid="TOURNAMENTS_LIST">
      {items.map((item: typeTournament) => {
        return <Tournament data={item} key={item.id} />;
      })}
    </Wrapper>
  );
};

export default Tournaments;
