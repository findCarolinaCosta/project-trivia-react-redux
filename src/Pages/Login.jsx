import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      isButtonDisabled: true,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onSubmit() {

  }

  onClick() {
    const { history } = this.props;
    history.push('./settings');
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
};

export default Login;
