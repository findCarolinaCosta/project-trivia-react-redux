import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuestionsAction } from '../actions';

class Question extends Component {
  constructor() {
    super();
    this.state = {
      isSelected: false,
    };
    this.getQuestions = this.getQuestions.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    const { token, dispatch } = this.props;
    dispatch(getQuestionsAction(token));
  }

  onClick() {
    // const { id } = target;
    this.setState({ isSelected: true });
    /* if (id === 'correct-answer') {
      console.log('resposta correta');
    } else {
      console.log('resposta errada');
    } */
  }

  getQuestions() {
    const { isSelected } = this.state;
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
                <label
                  key={ item }
                  htmlFor="correct-answer"
                  style={ isSelected ? { border: '3px solid rgb(6, 240, 15)' } : null }
                >
                  <input
                    type="checkbox"
                    name="question"
                    data-testid="correct-answer"
                    id="correct-answer"
                    onClick={ this.onClick }
                    style={ isSelected ? { border: '3px solid rgb(6, 240, 15)' } : null }
                  />
                  {item}
                </label>
              );
            }
            return (
              <label
                key={ item }
                htmlFor="wrong-answer-0"
                style={ isSelected ? { border: '3px solid rgb(255, 0, 0)' } : null }
              >
                <input
                  type="checkbox"
                  name="question"
                  data-testid={ `wrong-answer-${index}` }
                  id="wrong-answer-0"
                  onClick={ this.onClick }
                  style={ isSelected ? { border: '3px solid rgb(255, 0, 0)' } : null }
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
