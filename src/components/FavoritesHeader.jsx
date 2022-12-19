import React, { Component } from 'react';
import '../styles/FavoritesHeader.css';

export default class FavoritesHeader extends Component {
  render() {
    return (
      <header className="FavoritesHeader">
        <h2 className="header-title">Músicas Favoritas</h2>
      </header>
    );
  }
}
