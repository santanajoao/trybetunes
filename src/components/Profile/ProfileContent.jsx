import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProfileInfo from '../ProfileInfo';

export default class ProfileContent extends Component {
  render() {
    const { userInfos } = this.props;
    const { name, email, image, description } = userInfos;

    return (
      <>
        <img src={ image } className="Profile__picture" alt="Foto do usuário" />

        <ProfileInfo title="Nome" element="span">{ name }</ProfileInfo>

        <ProfileInfo title="E-mail" element="span">{ email }</ProfileInfo>

        <ProfileInfo title="Descrição" element="p">{ description }</ProfileInfo>

        <Link to="/profile/edit" className="Profile__link-btn">Editar perfil</Link>
      </>
    );
  }
}

ProfileContent.propTypes = {
  userInfos: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
