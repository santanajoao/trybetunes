import React, { Component } from 'react';
import '../styles/Loading.css';
import loadingIcon from '../assets/loading-icon.svg';

export default class Loading extends Component {
  render() {
    return (
      <div className="Loading">
        <img src={ loadingIcon } className="loading-icon" alt="Ícone de carregamento" />
        <h1 className="loading-message">Carregando...</h1>
      </div>
    );
  }
}
