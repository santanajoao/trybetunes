import React, { Component } from 'react';
import Header from '../components/Header';
import FavoritesContent from '../components/FavoritesContent';

export default class Favorites extends Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <Header />
        <FavoritesContent />
      </div>
    );
  }
}
