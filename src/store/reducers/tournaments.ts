import * as actionTypes from '../actions/actionTypes';
// import * as models from "../../models";

// interface Iaction extends models.IState {
//   results: [models.ICharacter];
//   type: string;
//   payload: { results: models.ICharacter; info: models.Iinfo };
// }

const initialState = {
  data: [],
  loading: true,
  errorInSearch: false,
  search: '',
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.FETCH_TOURNAMENTS_START:
      return {
        ...state,
        loading: true,
        errorInSearch: false,
      };
    case actionTypes.FETCH_TOURNAMENTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        errorInSearch: false,
      };
    case actionTypes.UPDATE_TOURNAMENT:
      return {
        ...state,
        data: action.payload,
        loading: false,
        errorInSearch: false,
      };
    case actionTypes.DELETE_TOURNAMENT:
      return {
        ...state,
        data: action.payload,
        loading: false,
        errorInSearch: false,
      };
    case actionTypes.FETCH_TOURNAMENTS_FAIL:
      return {
        ...state,
        data: null,
        errorInSearch: true,
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
