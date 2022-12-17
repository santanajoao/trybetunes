import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Login.css';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';
import Logo from '../components/Logo';

export default class Login extends Component {
  state = {
    isBtnDisabled: true,
    isLoading: false,
    username: '',
  };

  handleChange = ({ target }) => {
    const minUsernameLength = 3;
    const { name, value } = target;
    this.setState({
      [name]: value,
      isBtnDisabled: (value.length < minUsernameLength),
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { username } = this.state;
    const { history } = this.props;

    this.setState({ isLoading: true });

    await createUser({ name: username });

    history.push('/search');
  };

  render() {
    const { isBtnDisabled, isLoading, username } = this.state;

    if (isLoading) return <Loading />;

    return (
      <div data-testid="page-login" className="Login">
        <form onSubmit={ this.handleSubmit } className="login-form">
          <Logo />
          <input
            value={ username }
            type="text"
            placeholder="qual é o seu nome?"
            onChange={ this.handleChange }
            name="username"
            data-testid="login-name-input"
            className="name-input"
          />

          <button
            type="submit"
            disabled={ isBtnDisabled }
            data-testid="login-submit-button"
            className="login-button"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
