import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MusicsList from '../Album/MusicsList';
import Loading from '../Loading';

export default class FavoritesContent extends Component {
  render() {
    const { favoriteSongs, isLoading, updateFavorites } = this.props;
    if (isLoading) {
      return <Loading className="Favorites__Loading" />;
    }

    if (favoriteSongs.length === 0) {
      return (
        <p className="Favorites__message">
          Você ainda não tem músicas favoritas!
        </p>
      );
    }

    return (
      <MusicsList
        updateFavorites={ updateFavorites }
        favoriteSongs={ favoriteSongs }
        albumMusics={ favoriteSongs }
      />
    );
  }
}

FavoritesContent.propTypes = {
  favoriteSongs: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
  updateFavorites: PropTypes.func.isRequired,
};
