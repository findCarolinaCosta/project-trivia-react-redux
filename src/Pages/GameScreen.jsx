import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import convertEmailToHash from '../services/gravatarRequest';

class GameScreen extends React.Component {
  render() {
    const { name, email } = this.props;
    const link = convertEmailToHash(email);

    return (
      <header>
        <img
          data-testid="header-profile-picture"
          alt="Foto do perfil"
          src={ link }
        />
        <p
          data-testid="header-player-name"
        >
          { name }
        </p>
        <p
          data-testid="header-score"
        >
          0
        </p>
      </header>
    );
  }
}

GameScreen.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.player.name,
  email: state.player.email,
});

export default connect(mapStateToProps)(GameScreen);
