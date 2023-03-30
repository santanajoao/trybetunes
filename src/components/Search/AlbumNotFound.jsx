import React, { Component } from 'react';
import '../../styles/Search/AlbumNotFound.css';
import notFoundIcon from '../../assets/album-not-found-icon.svg';

export default class AlbumNotFound extends Component {
  render() {
    return (
      <div className="AlbumNotFound">
        <img
          src={ notFoundIcon }
          className="AlbumNotFound__icon"
          alt="Ícone de erro"
        />
        <p className="AlbumNotFound__message">Nenhum álbum foi encontrado</p>
      </div>
    );
  }
}
