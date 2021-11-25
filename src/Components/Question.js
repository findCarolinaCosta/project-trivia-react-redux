import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuestionsAction } from '../actions';

class Question extends Component {
  constructor() {
    super();
    this.getQuestions = this.getQuestions.bind(this);
  }

  componentDidMount() {
    const { token, dispatch } = this.props;
    dispatch(getQuestionsAction(token));
  }

  getQuestions() {
    const { questions } = this.props;
    return (questions.map((question) => {
      const incorrectAnswer = question.incorrect_answers.map((item) => item);
      const questionsArr = [...incorrectAnswer, question.correct_answer];
      return (
        <div key={ question.correct_answer }>
          <h2 data-testid="question-category">{ question.category }</h2>
          <p data-testid="question-text">{ question.question }</p>
          {questionsArr.map((item, index) => {
            if (item === question.correct_answer) {
              return (
                <label key={ item } htmlFor="correct-answer">
                  <input
                    type="radio"
                    name="question"
                    data-testid="correct-answer"
                    id="correct-answer"
                  />
                  {item}
                </label>
              );
            }
            return (
              <label key={ item } htmlFor="wrong-answer-0">
                <input
                  type="radio"
                  name="question"
                  data-testid={ `wrong-answer-${index}` }
                  id="wrong-answer-0"
                />
                {item}
              </label>
            );
          })}
        </div>);
    }));
  }

  render() {
    const { token } = this.props;
    return (
      <div className="teste">
        { !token ? '' : this.getQuestions()[0] }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
  questions: state.questions,
});

Question.propTypes = {
  token: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(Question);
