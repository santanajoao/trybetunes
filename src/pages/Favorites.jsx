import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Favorites/Favorites.css';
import Header from '../components/Header';
import SideBar from '../components/SideBar/SideBar';
import { getFavoriteSongs } from '../utils/localstorage';
import FavoritesContent from '../components/Favorites/FavoritesContent';

export default class Favorites extends Component {
  state = {
    favoriteSongs: [],
    isLoading: true,
  };

  componentDidMount() {
    this.updateFavorites();
  }

  updateFavorites = async () => {
    const favoriteSongs = await getFavoriteSongs();
    this.setState({
      favoriteSongs,
      isLoading: false,
    });
  };

  render() {
    const { favoriteSongs, isLoading } = this.state;
    const { history } = this.props;
    return (
      <div className="Favorites">
        <SideBar history={ history } />
        <div className="Favorites__container">
          <Header className="Favorites__Header">
            <h1 className="Favorites__title">Musicas Favoritas</h1>
          </Header>
          <main className="Favorites__main">
            <FavoritesContent
              updateFavorites={ this.updateFavorites }
              isLoading={ isLoading }
              favoriteSongs={ favoriteSongs }
            />
          </main>
        </div>
      </div>
    );
  }
}

Favorites.propTypes = {
  history: PropTypes.shape({}).isRequired,
};
