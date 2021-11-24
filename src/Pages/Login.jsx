import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getPlayer } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      isButtonDisabled: true,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const { token, history } = this.props;
    getPlayer();
    localStorage.setItem('token', token);
    history.push('/game');
  }

  handleInputChange({ target }) {
    const { name, email } = this.state;
    this.setState({
      [target.name]: target.value,
    });
    this.setState({
      isButtonDisabled: !(name && email),
    });
  }

  render() {
    const { name, email, isButtonDisabled } = this.state;
    return (
      <form onSubmit={ this.onSubmit }>
        <input
          data-testid="input-player-name"
          type="text"
          name="name"
          onChange={ this.handleInputChange }
          value={ name }
        />
        <input
          data-testid="input-gravatar-email"
          type="text"
          name="email"
          onChange={ this.handleInputChange }
          value={ email }
        />
        <button
          data-testid="btn-play"
          type="submit"
          disabled={ isButtonDisabled }
        >
          Jogar
        </button>
      </form>);
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  token: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  token: state.token.state,
});

export default connect(mapStateToProps)(Login);
