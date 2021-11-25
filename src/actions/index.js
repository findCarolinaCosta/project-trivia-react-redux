import tokenRequest from '../services/tokenRequest';

export const GET_PLAYER_TOKEN = 'GET_PLAYER_TOKEN';
export const GET_USER = 'GET-USER';
export const GET_USER_RANKING = 'GET_USER_RANKING';

export const getPlayerToken = (token) => ({
  type: GET_PLAYER_TOKEN,
  token,
});

export const getPlayer = () => async (dispatch) => {
  try {
    const response = await tokenRequest();
    dispatch(getPlayerToken(response));
  } catch (e) {
    console.log(e);
  }
};

export const getUser = (data) => ({
  type: GET_USER,
  data,
});

export const getUserRanking = (payload) => ({
  type: GET_USER_RANKING,
  payload,
});
