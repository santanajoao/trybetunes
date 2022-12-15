import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MusicCard from './MusicCard';
import Loading from './Loading';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

export default class AlbumContent extends Component {
  state = {
    favoriteSongs: [],
  };

  async componentDidMount() {
    this.updateFavoriteSongs();
  }

  updateFavoriteSongs = async () => {
    const favoriteSongs = await getFavoriteSongs();
    this.setState({ favoriteSongs });
  };

  render() {
    const {
      collectionName, artistName, albumMusics, isLoading, handleLoading,
    } = this.props;

    const { favoriteSongs } = this.state;

    if (isLoading) return <Loading />;

    return (
      <main>
        <h1 data-testid="album-name">{ collectionName }</h1>
        <h2 data-testid="artist-name">{ artistName }</h2>
        <ul>
          {albumMusics.map((music) => (
            <MusicCard
              key={ music.trackId }
              music={ music }
              handleLoading={ handleLoading }
              isFavorite={
                favoriteSongs.some(({ trackId }) => trackId === music.trackId)
              }
              updateFavoriteSongs={ this.updateFavoriteSongs }
            />
          ))}
        </ul>
      </main>
    );
  }
}

AlbumContent.propTypes = {
  collectionName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  albumMusics: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleLoading: PropTypes.func.isRequired,
};
