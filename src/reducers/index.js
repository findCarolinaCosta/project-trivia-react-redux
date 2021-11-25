import { combineReducers } from 'redux';
import player from './player';
import token from './token';
import ranking from './ranking';
import getQuestionsReducer from './getQuestionsReducer';

const rootReducer = combineReducers({
  player,
  token,
  ranking,
  questions: getQuestionsReducer,
});

export default rootReducer;
