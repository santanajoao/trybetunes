import React, { Component } from 'react';
import Loading from './Loading';
import MusicCard from './MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

export default class FavoritesContent extends Component {
  state = {
    isLoading: false,
    favoriteSongs: [],
  };

  componentDidMount() {
    this.updateFavoriteSongs();
  }

  handleLoading = () => {
    this.setState(({ isLoading }) => ({ isLoading: !isLoading }));
  };

  updateFavoriteSongs = async () => {
    const favoriteSongs = await getFavoriteSongs();
    this.setState({ favoriteSongs });
  };

  render() {
    const { isLoading, favoriteSongs } = this.state;

    if (isLoading) {
      return <Loading />;
    }

    return (
      <ul>
        { favoriteSongs.map((music) => (
          <MusicCard
            key={ music.trackId }
            music={ music }
            handleLoading={ this.handleLoading }
            isFavorite
            updateFavoriteSongs={ this.updateFavoriteSongs }
          />
        )) }
      </ul>
    );
  }
}
