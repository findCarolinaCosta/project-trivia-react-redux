import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import questionsRequest from '../services/questionRequest';

class Question extends Component {
  async awaitfetch() {
    const { token } = this.props;
    const teste = await questionsRequest(token);
    console.log(teste, 'categories');
  }

  render() {
    this.awaitfetch();
    return (
      <div>
        <h2>{ }</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.token.state,
});

export default connect(mapStateToProps)(Question);

Question.propTypes = {
  token: PropTypes.string.isRequired,
};
