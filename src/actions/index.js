import tokenRequest from '../services/tokenRequest';
import questionsRequest from '../services/questionRequest';

export const GET_PLAYER_TOKEN = 'GET_PLAYER_TOKEN';
export const GET_USER = 'GET-USER';
export const GET_USER_RANKING = 'GET_USER_RANKING';
export const SET_QUESTIONS = 'SET_QUESTIONS';
export const SET_UPDATE_SCORE = 'SET_UPDATE_SCORE';

export const getPlayerToken = (token) => ({
  type: GET_PLAYER_TOKEN,
  token,
});

export const setQuestions = (questions) => ({
  type: SET_QUESTIONS,
  questions,
});

export const setUpdateScore2 = (player, score) => {
  const playerNew = { ...player };
  playerNew.score = score + player.score;
  localStorage.setItem('state', JSON.stringify({ player: playerNew }));
  return ({
    type: SET_UPDATE_SCORE,
    score,
  });
};
export const getPlayer = () => async (dispatch) => {
  try {
    const response = await tokenRequest();
    localStorage.setItem('token', response);
    dispatch(getPlayerToken(response));
  } catch (e) {
    console.log(e);
  }
};

export const getUser = (data) => ({
  type: GET_USER,
  data,
});

export const getQuestionsAction = (token) => async (dispatch) => {
  try {
    const response = await questionsRequest(token);
    dispatch(setQuestions(response));
  } catch (e) {
    console.log(e);
  }
};

export const getUserRanking = (payload) => ({
  type: GET_USER_RANKING,
  payload,
});
