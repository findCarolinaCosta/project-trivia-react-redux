import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Ranking extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      ranking: [],
    };
    this.updateRanking = this.updateRanking.bind(this);
  }

  componentDidMount() {
    this.updateRanking();
  }

  onClick() {
    const { history } = this.props;
    history.push('/');
  }

  updateRanking() {
    const { ranking } = this.props;
    this.setState({
      ranking,
    });
  }

  render() {
    const { ranking } = this.state;
    console.log(ranking);
    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        {ranking.sort((a, b) => b.score - a.score)
          .map((player, idx) => (
            <article
              key={ idx }
            >
              <img src={ player.picture } alt={ player.name } />
              <h2
                data-testid={ `player-name-${idx}` }
              >
                {player.name}

              </h2>
              <h3
                data-testid={ `player-score-${idx}` }
              >
                {player.score}

              </h3>
            </article>))}
        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ this.onClick }
        >
          Voltar ao Início
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ranking: state.ranking,
});

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  ranking: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(Ranking);
