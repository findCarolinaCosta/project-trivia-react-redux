import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuestionsAction } from '../actions';
import './question.css';

class Question extends Component {
  constructor() {
    super();
    this.state = {
      isSelected: false,
      actualQuestion: 0,
    };
    this.getQuestions = this.getQuestions.bind(this);
    this.onClick = this.onClick.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  componentDidMount() {
    const { token, dispatch } = this.props;
    dispatch(getQuestionsAction(token));
  }

  onClick() {
    this.setState({ isSelected: true });
  }

  getQuestions() {
    const { isSelected } = this.state;
    const { questions } = this.props;
    return (questions.map((question) => {
      const incorrectAnswers = question.incorrect_answers;
      const questionsArr = [...incorrectAnswers, question.correct_answer];
      const shuffled = questionsArr.sort();
      return (
        <div key={ question.correct_answer }>
          <h2 data-testid="question-category">{ question.category }</h2>
          <p data-testid="question-text">{ question.question }</p>
          {shuffled.map((item, index) => {
            if (item === question.correct_answer) {
              return (
                <button
                  key="correct-answer"
                  type="button"
                  data-testid="correct-answer"
                  className="correct-answer"
                  onClick={ this.onClick }
                  disabled={ isSelected }
                >
                  { item }
                </button>
              );
            }
            return (
              <button
                key={ `wrong-answer-${index}` }
                type="button"
                data-testid={ `wrong-answer-${index}` }
                className="wrong-answer"
                onClick={ this.onClick }
                disabled={ isSelected }
              >
                { item }
              </button>);
          })}
        </div>);
    }));
  }

  nextQuestion() {
    const MAX_QUEST = 5;
    const { actualQuestion } = this.state;
    if (actualQuestion < MAX_QUEST) {
      this.setState((prevState) => ({
        actualQuestion: prevState.actualQuestion + 1,
        isSelected: false,
      }));
    }
  }

  render() {
    const { token } = this.props;
    const { actualQuestion, isSelected } = this.state;
    const MAX_QUEST = 5;
    return (
      <div className="teste">
        { !token ? '' : this.getQuestions()[actualQuestion] }
        { actualQuestion >= MAX_QUEST
          && (
            <button
              type="button"
            >
              Ver resultados
            </button>)}
        { isSelected
        && (
          <button
            data-testid="btn-next"
            type="button"
            onClick={ this.nextQuestion }
            disabled={ !isSelected }
          >
            Próxima
          </button>)}
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
  // history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(Question);
