import { GET_USER_RANKING } from '../actions';

const INITIAL_STATE = [];

const rankingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_USER_RANKING:
    return [...state, action.payload];
  default:
    return state;
  }
};

export default rankingReducer;
