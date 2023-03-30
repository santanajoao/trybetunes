import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfileInfo from '../ProfileInfo';

export default class ProfileEditContent extends Component {
  render() {
    const {
      userInfos, handleChange, handleSubmit, isButtonDisabled,
    } = this.props;
    const { name, email, image, description } = userInfos;

    return (
      <form onSubmit={ handleSubmit }>
        <div className="image-input-container">
          <img src={ image } className="ProfileEdit__picture" alt="Foto do usuário" />
          <input
            value={ image }
            type="text"
            placeholder="Insira um link"
            onChange={ handleChange }
            name="image"
            id="image-input"
          />
        </div>

        <label htmlFor="name-input">
          <ProfileInfo title="Nome" element="span">
            Fique à vontade para usar seu nome social
          </ProfileInfo>
          <input
            value={ name }
            type="text"
            placeholder="Seu nome"
            onChange={ handleChange }
            name="name"
            id="name-input"
          />
        </label>

        <label htmlFor="email-input">
          <ProfileInfo title="E-mail" element="span">
            Escolha um e-mail que consulte diariamente
          </ProfileInfo>
          <input
            value={ email }
            type="email"
            placeholder="seu_nome@email.com.br"
            onChange={ handleChange }
            name="email"
            id="email-input"
          />
        </label>

        <label htmlFor="description-input">
          <ProfileInfo title="Descrição" />
          <textarea
            value={ description }
            placeholder="Sobre mim"
            onChange={ handleChange }
            name="description"
            id="description-input"
          />
        </label>

        <button
          type="submit"
          className="ProfileEdit__link-btn"
          disabled={ isButtonDisabled }
        >
          Salvar
        </button>
      </form>
    );
  }
}

ProfileEditContent.propTypes = {
  userInfos: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
