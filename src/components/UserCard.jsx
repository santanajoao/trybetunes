import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/UserCard.css';

export default class UserCard extends Component {
  render() {
    const { image, username } = this.props;
    return (
      <div className="UserCard">
        <img src={ image } className="side-user-img" alt="Imagem do usuário" />
        <span data-testid="header-user-name" className="username">
          { username }
        </span>
      </div>
    );
  }
}

UserCard.propTypes = {
  username: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
