import React from 'react';
import Question from '../Components/Question';

class GameScreen extends React.Component {
  render() {
    return (
      <>
        <header>
          <image
            data-testid="header-profile-picture"
          />
          <p
            data-testid="header-player-name"
          >
            Nome
          </p>
          <p
            data-testid="header-score"
          >
            0
          </p>
        </header>
        <Question />
      </>
    );
  }
}

export default GameScreen;
