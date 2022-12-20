import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getUser, updateUser } from '../services/userAPI';
import Loading from './Loading';
import LabelInput from './LabelInput';
import userImg from '../assets/user-icon.png';

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
      <>
        <header className="profile-header" />
        <form onSubmit={ this.handleSubmit } className="profile-form">
          <img
            src={ image || userImg }
            data-testid="profile-image"
            className="profile-image"
            alt={ name }
          />
          <input
            value={ image || userImg }
            type="text"
            placeholder="Insira um link"
            onChange={ this.handleChange }
            name="image"
            data-testid="edit-input-image"
            className="image-input"
          />
          <ul className="infos-list">
            <li>
              <LabelInput
                complement="name"
                paragraph="Fique à vontade para usar seu nome social"
                placeholder="Nome"
                value={ name }
                type="text"
                handleChange={ this.handleChange }
                label="Nome"
              />
            </li>
            <li>
              <LabelInput
                complement="email"
                placeholder="seu_nome@email.com"
                paragraph="Escolha um e-mail que consulte diariamente"
                value={ email }
                type="text"
                handleChange={ this.handleChange }
                label="E-mail"
              />
            </li>
            <li>
              <LabelInput
                placeholder="Sobre mim"
                complement="description"
                value={ description }
                type="textarea"
                handleChange={ this.handleChange }
                label="Descrição"
              />
            </li>
          </ul>

          <button
            type="submit"
            disabled={ isBtnDisabled }
            data-testid="edit-button-save"
            className="edit-profile-btn"
          >
            Salvar
          </button>
        </form>
      </>
    );
  }
}

ProfileEditContent.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
}.isRequired;
