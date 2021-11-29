import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../Components/Header';

class Feedback extends React.Component {
  render() {
    const { assertions } = this.props;
    const NUMERO_DE_ACERTOS = 3;
    return (
      <>
        <Header />
        {assertions < NUMERO_DE_ACERTOS
          ? <h1 data-testid="feedback-text">Podia ser melhor...</h1>
          : <h1 data-testid="feedback-text">Mandou bem!</h1>}
      </>
    );
  }
}

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
});

export default connect(mapStateToProps)(Feedback);
