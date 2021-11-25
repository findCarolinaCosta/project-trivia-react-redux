import { GET_PLAYER_TOKEN } from '../actions';

const tokenReducer = (state = '', action) => {
  switch (action.type) {
  case GET_PLAYER_TOKEN:
    return action.token;
  default:
    return state;
  }
};

export default tokenReducer;
