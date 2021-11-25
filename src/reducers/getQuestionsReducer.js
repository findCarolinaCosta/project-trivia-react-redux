import { SET_QUESTIONS } from '../actions';

const getQuestionsReducer = (state = [], action) => {
  switch (action.type) {
  case SET_QUESTIONS:
    return action.questions;
  default:
    return state;
  }
};

export default getQuestionsReducer;
