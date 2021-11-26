import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuestionsAction } from '../actions';
import './question.css';

const GAME_TIME = 30;
const ONE_SECOND_IN_MS = 1000;
class Question extends Component {
  constructor() {
    super();
    this.state = {
      gameTime: GAME_TIME,
      isSelected: false,
      actualQuestion: 0,
    };
    this.getQuestions = this.getQuestions.bind(this);
    this.onClick = this.onClick.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.setGameTime = this.setGameTime.bind(this);
    this.setTimerGlobal = this.setTimerGlobal.bind(this);
  }

  componentDidMount() {
    const { token, dispatch } = this.props;
    dispatch(getQuestionsAction(token));
    this.setTimerGlobal();
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.gameTime === 1) {
      clearInterval(this.intervalTime);
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalTime);
    this.setGameTime();
  }

  onClick() {
    this.setState({ isSelected: true });
    const { gameTime } = this.state;
    console.log(gameTime);
    clearInterval(this.intervalTime);
    this.setState({
      gameTime,
    });
  }

  setTimerGlobal() {
    this.intervalTime = setInterval(() => {
      console.log('Estou contando');
      this.setState((prevState) => ({
        gameTime: prevState.gameTime - 1,
        isSelected: prevState.gameTime === 1,
      }));
    }, ONE_SECOND_IN_MS);
  }

  setGameTime() {
    this.setState({
      gameTime: GAME_TIME,
    });
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
    const MAX_QUEST = 4;
    const { actualQuestion } = this.state;
    const { history } = this.props;
    if (actualQuestion < MAX_QUEST) {
      this.setState((prevState) => ({
        actualQuestion: prevState.actualQuestion + 1,
        isSelected: false,
      }));
    } else {
      history.push('./feedback');
    }
    this.setGameTime();
    this.setTimerGlobal();
  }

  render() {
    const { token } = this.props;
    const { actualQuestion, isSelected, gameTime } = this.state;
    return (
      <div className="teste">
        { !token ? '' : this.getQuestions()[actualQuestion] }
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
        <p>{gameTime}</p>
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
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(Question);
