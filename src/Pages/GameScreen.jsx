import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Question from '../Components/Question';

class GameScreen extends React.Component {
  constructor() {
    super();
    this.catchPicture = this.catchPicture.bind(this);
  }

  catchPicture() {
    const { ranking, name } = this.props;
    const link = ranking.find((data) => data.name === name);
    if (link) {
      return link.picture;
    }
    return '';
  }

  render() {
    const { name, history } = this.props;
    return (
      <div>
        <header>
          <img
            data-testid="header-profile-picture"
            alt="Foto do perfil"
            src={ this.catchPicture() }
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
        <Question history={ history } />
      </div>
    );
  }
}

GameScreen.propTypes = {
  name: PropTypes.string.isRequired,
  ranking: PropTypes.arrayOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  name: state.player.name,
  ranking: state.ranking,
});

export default connect(mapStateToProps)(GameScreen);
