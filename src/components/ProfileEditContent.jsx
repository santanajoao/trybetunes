import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getUser, updateUser } from '../services/userAPI';
import Loading from './Loading';

export default class ProfileEditContent extends Component {
  state = {
    name: '',
    email: '',
    image: '',
    description: '',
    isLoading: false,
    isBtnDisabled: true,
  };

  componentDidMount() {
    this.updateUserInfosState();
  }

  isEmptyString = (string) => !string.replaceAll(' ', '');

  validateSubmitBtn = () => {
    const { name, email, image, description } = this.state;

    const isEmpty = (
      this.isEmptyString(name)
      || this.isEmptyString(email)
      || this.isEmptyString(image)
      || this.isEmptyString(description)
    );

    const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/.test(email);
    this.setState({
      isBtnDisabled: isEmpty || !validEmail,
    });
  };

  updateUserInfosState = async () => {
    this.setState({ isLoading: true });
    const { name, email, image, description } = await getUser();
    this.setState({
      name,
      email,
      image,
      description,
      isLoading: false,
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, this.validateSubmitBtn);
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, image, description } = this.state;
    const { history } = this.props;

    this.setState({ isLoading: true });
    await updateUser({ name, email, image, description });
    this.setState({ isLoading: false });

    history.push('/profile');
  };

  render() {
    const {
      isLoading, email, image, name, description, isBtnDisabled,
    } = this.state;

    if (isLoading) return <Loading />;

    return (
      <form onSubmit={ this.handleSubmit }>
        <img src={ image } data-testid="profile-image" alt={ name } />
        <input
          value={ image }
          type="text"
          onChange={ this.handleChange }
          name="image"
          data-testid="edit-input-image"
        />
        <ul>
          <li>
            <label htmlFor="input-name">
              Nome
              <input
                value={ name }
                type="text"
                onChange={ this.handleChange }
                name="name"
                id="input-name"
                data-testid="edit-input-name"
              />
            </label>
          </li>
          <li>
            <label htmlFor="input-email">
              E-mail
              <input
                value={ email }
                type="text"
                onChange={ this.handleChange }
                name="email"
                id="input-email"
                data-testid="edit-input-email"
              />
            </label>
          </li>
          <li>
            <label htmlFor="input-description">
              Descrição
              <textarea
                value={ description }
                onChange={ this.handleChange }
                name="description"
                id="input-description"
                data-testid="edit-input-description"
              />
            </label>
          </li>
        </ul>

        <button
          type="submit"
          disabled={ isBtnDisabled }
          data-testid="edit-button-save"
        >
          Editar perfil
        </button>
      </form>
    );
  }
}

ProfileEditContent.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
}.isRequired;
