import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';

class Feedback extends React.Component {
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
        <Link data-testid="btn-play-again" to="/">Jogar novamente</Link>
      </>
    );
  }
}

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
});

export default connect(mapStateToProps)(Feedback);
