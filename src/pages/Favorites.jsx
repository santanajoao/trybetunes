import React, { Component } from 'react';
import SideBar from '../components/SideBar';
import FavoritesContent from '../components/FavoritesContent';
import FavoritesHeader from '../components/FavoritesHeader';
import '../styles/Favorites.css';

export default class Favorites extends Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <SideBar />
        <main className="main-content">
          <FavoritesHeader />
          <FavoritesContent />
        </main>
      </div>
    );
  }
}
