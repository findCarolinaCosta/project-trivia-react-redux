import { GET_USER, SET_UPDATE_SCORE,
  RESET_PLAYER_SCORE_AND_ASSERTIONS } from '../actions';

const INITIAL_PLAYER_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const playerReducer = (state = INITIAL_PLAYER_STATE, action) => {
  switch (action.type) {
  case GET_USER:
    return {
      ...state,
      name: action.data.name,
      gravatarEmail: action.data.email,
    };
  case SET_UPDATE_SCORE:
    return {
      ...state,
      score: state.score + action.score,
      assertions: action.assertions,
    };
  case RESET_PLAYER_SCORE_AND_ASSERTIONS:
    return {
      ...state,
      score: 0,
      assertions: 0,
    };
  default:
    return state;
  }
};

export default playerReducer;
