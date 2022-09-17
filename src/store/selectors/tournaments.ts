import { RootState } from '../reducers';
export const selectItems = (state: RootState) => state.tournaments.items;
