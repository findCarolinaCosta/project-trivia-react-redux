import { GET_USER, SET_UPDATE_SCORE } from '../actions';

const INITIAL_PLAYER_STATE = {
  name: '',
  assertions: '',
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
    };
  default:
    return state;
  }
};

export default playerReducer;
