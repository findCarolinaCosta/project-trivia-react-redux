import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getPlayer, getUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      // isButtonDisabled: true,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const { token, history, dispatch } = this.props;
    const { name, email } = this.state;
    dispatch(getPlayer());
    dispatch(getUser({ name, email }));
    localStorage.setItem('token', token);
    history.push('/game');
  }

  onClick() {
    const { history } = this.props;
    history.push('./settings');
  }

  handleInputChange({ target }) {
    // const { name, email } = this.state;
    this.setState({
      [target.name]: target.value,
    });
    // this.setState({
    //   isButtonDisabled: !(name && email),
    // });
  }

  render() {
    const { name, email } = this.state;
    const isDisabled = name && email;
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
          disabled={ !isDisabled }
        >
          Jogar
        </button>
        <button
          type="button"
          data-testid="btn-settings"
          onClick={ this.onClick }
        >
          Configurações
        </button>
      </form>);
  }
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  token: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  token: state.token.state,
});

export default connect(mapStateToProps)(Login);
