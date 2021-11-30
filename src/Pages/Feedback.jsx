import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getUserRanking, resetPlayerScore } from '../actions';
import Header from '../Components/Header';
import convertEmailToHash from '../services/gravatarRequest';

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(route) { // name, email, score
    const { history, dispatch, name, email, score } = this.props;
    const playerObj = {
      player: {
        name: '',
        assertions: [],
        score: 0,
        gravatarEmail: '',
      },
    };
    localStorage.setItem('state', JSON.stringify(playerObj));
    dispatch(resetPlayerScore());
    const picture = convertEmailToHash(email);
    const currentPlayerObj = { name, picture, score };
    dispatch(getUserRanking(currentPlayerObj));
    history.push(route);
  }

  render() {
    const { assertions, score } = this.props;
    const NUMERO_DE_ACERTOS = 3;
    return (
      <>
        <Header />
        {assertions < NUMERO_DE_ACERTOS
          ? <h1 data-testid="feedback-text">Podia ser melhor...</h1>
          : <h1 data-testid="feedback-text">Mandou bem!</h1>}
        <h2 data-testid="feedback-total-score">{score}</h2>
        <h3 data-testid="feedback-total-question">{assertions}</h3>
        <button
          type="button"
          data-testid="btn-play-again"
          onClick={ () => this.onButtonClick('/') }
        >
          Jogar novamente

        </button>
        <button
          type="button"
          data-testid="btn-ranking"
          onClick={ () => this.onButtonClick('/ranking') }
        >
          Ver Ranking

        </button>
      </>
    );
  }
}

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  score: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
  name: state.player.name,
  email: state.player.gravatarEmail,
  ranking: state.ranking,
});

export default connect(mapStateToProps)(Feedback);
