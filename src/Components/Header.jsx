import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import convertEmailToHash from '../services/gravatarRequest';

class Header extends Component {
  render() {
    const { email, name, score } = this.props;
    const gravatar = convertEmailToHash(email);
    return (
      <div>
        <img src={ gravatar } alt="" data-testid="header-profile-picture" />
        <h1 data-testid="header-player-name">{ name }</h1>
        <h2 data-testid="header-score">{ score }</h2>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.player.email,
  name: state.player.name,
  score: state.player.score,
});

export default connect(mapStateToProps)(Header);
