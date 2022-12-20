import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MusicCard from './MusicCard';
import Loading from './Loading';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import '../styles/AlbumContent.css';

export default class AlbumContent extends Component {
  state = {
    favoriteSongs: [],
  };

  async componentDidMount() {
    this.updateFavoriteSongs();
  }

  updateFavoriteSongs = async () => {
    const { handleLoading } = this.props;
    handleLoading();
    const favoriteSongs = await getFavoriteSongs();
    this.setState({ favoriteSongs });
    handleLoading();
  };

  render() {
    const {
      collectionName, artistName, albumMusics,
      isLoading, handleLoading, albumCape,
    } = this.props;

    const { favoriteSongs } = this.state;

    if (isLoading) return <Loading />;

    return (
      <main className="AlbumContent">
        <header className="album-header">
          <img src={ albumCape } className="album-cape" alt="Capa do álbum" />
          <section className="name-n-artist">
            <h1 data-testid="album-name" className="album-title">
              { collectionName }
            </h1>
            <h2 data-testid="artist-name" className="album-artist">
              { artistName }
            </h2>
          </section>
        </header>

        <ul className="musics-list">
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
  collectionName: PropTypes.string,
  artistName: PropTypes.string,
  albumMusics: PropTypes.arrayOf(
    PropTypes.object,
  ),
  isLoading: PropTypes.bool,
  handleLoading: PropTypes.func,
}.isRequired;
