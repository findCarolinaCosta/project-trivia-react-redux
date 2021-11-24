import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class GameScreen extends React.Component {
  render() {
    const { name } = this.props;

    return (
      <header>
        <img
          data-testid="header-profile-picture"
          alt="Foto do perfil"
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
};

const mapStateToProps = (state) => ({
  name: state.player.name,
});

export default connect(mapStateToProps)(GameScreen);
