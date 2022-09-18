import { RootState } from '../reducers';
export const selectItems = (state: RootState) => state.tournaments.items;
export const search = (state: RootState) => state.tournaments.search;
