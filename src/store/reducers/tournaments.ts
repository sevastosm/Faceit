import * as actionTypes from '../actions/actionTypes';

export const initialState = {
  items: [],
  loading: false,
  errorInSearch: false,
  search: '',
};

const reducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case actionTypes.FETCH_TOURNAMENTS_START:
      return {
        ...state,
        loading: action.payload,
      };
    case actionTypes.FETCH_TOURNAMENTS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false,
        errorInSearch: false,
      };
    case actionTypes.SET_TOURNAMENTS:
      return {
        ...state,
        items: action.payload,
        loading: false,
        errorInSearch: false,
      };
    case actionTypes.UPDATE_TOURNAMENT:
      return {
        ...state,
        items: action.payload,
      };
    case actionTypes.DELETE_TOURNAMENT:
      return {
        ...state,
        items: action.payload,
      };
    case actionTypes.FETCH_TOURNAMENTS_FAIL:
      return {
        ...state,
        errorInSearch: action.payload,
      };
    case actionTypes.SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
