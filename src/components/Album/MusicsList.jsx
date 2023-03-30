import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/Album/MusicsList.css';
import MusicCard from './MusicCard';

export default class MusicsList extends Component {
  render() {
    const { albumMusics, favoriteSongs, updateFavorites } = this.props;
    return (
      <ul className="MusicsList">
        { albumMusics.map((music) => (
          <MusicCard
            key={ music.trackId }
            updateFavorites={ updateFavorites }
            music={ music }
            checked={
              favoriteSongs.some(({ trackId }) => trackId === music.trackId)
            }
          />
        )) }
      </ul>
    );
  }
}

MusicsList.propTypes = {
  albumMusics: PropTypes.arrayOf(
    PropTypes.shape({
      trackId: PropTypes.number,
    }),
  ).isRequired,
  favoriteSongs: PropTypes.arrayOf(
    PropTypes.shape({
      trackId: PropTypes.number,
    }),
  ).isRequired,
  updateFavorites: PropTypes.func.isRequired,
};
