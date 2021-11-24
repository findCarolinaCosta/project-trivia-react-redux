import { GET_USER } from '../actions';

const INITIAL_PLAYER_STATE = {
  name: '',
  assertions: '',
  score: '',
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
  default:
    return state;
  }
};

export default playerReducer;
