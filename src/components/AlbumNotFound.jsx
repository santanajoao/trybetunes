import React, { Component } from 'react';
import notFoundIcon from '../assets/not-found-icon.svg';
import '../styles/AlbumNotFound.css';

export default class AlbumNotFound extends Component {
  render() {
    return (
      <div className="AlbumNotFound">
        <img
          src={ notFoundIcon }
          className="not-found-icon"
          alt="Ícone de erro: um X dentro de um círculo"
        />
        <p className="not-found-message">Nenhum álbum foi encontrado</p>
      </div>
    );
  }
}
