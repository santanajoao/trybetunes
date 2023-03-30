import React, { Component } from 'react';
import '../styles/Login/Login.css';
import PropTypes from 'prop-types';
import TrybetunesLogo from '../components/TrybetunesLogo';
import LinkButton from '../components/Login/LinkButton';
import RoundedInput from '../components/RoundedInput';
import { saveUserInfos } from '../utils/localstorage';
import Loading from '../components/Loading';

export default class Login extends Component {
  state = {
    isButtonDisabled: true,
    isLoading: false,
    username: '',
  };

  onInputChange = ({ target }) => {
    const { value } = target;
    const minLength = 3;

    this.setState({
      username: value,
      isButtonDisabled: (value.length < minLength),
    });
  };

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ isLoading: true });

    const { username } = this.state;
    await saveUserInfos({ name: username });

    const { history } = this.props;
    history.push('/search');
  };

  render() {
    const { isButtonDisabled, isLoading, username } = this.state;

    if (isLoading) {
      return <Loading className="Login__Loading" />;
    }

    return (
      <div className="Login">
        <main className="Login__main">
          <TrybetunesLogo className="Login__trybetunes-logo" />
          <form onSubmit={ this.onSubmit } className="Login__form">
            <RoundedInput
              value={ username }
              placeholder="qual é seu nome?"
              onChange={ this.onInputChange }
              className="form__input"
            />
            <LinkButton
              to="/search"
              disabled={ isButtonDisabled }
              className="form__button"
            >
              Entrar
            </LinkButton>
          </form>
        </main>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
