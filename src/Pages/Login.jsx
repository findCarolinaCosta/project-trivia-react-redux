import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      isButtonDisabled: true,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  onSubmit() {

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

export default Login;
