import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchAlbumMusicsById } from '../../utils/itunesAPI';
import { getFavoriteSongs } from '../../utils/localstorage';
import Loading from '../Loading';
import Header from '../Header';
import MusicsList from './MusicsList';

export default class AlbumContent extends Component {
  state = {
    albumArtist: '',
    albumCover: '',
    albumMusics: [],
    albumTitle: '',
    favoriteSongs: [],
    isLoading: true,
  };

  async componentDidMount() {
    await this.updateFavorites();
    this.updateAlbumInfos();
  }

  updateFavorites = async () => {
    const favoriteSongs = await getFavoriteSongs();
    this.setState({
      favoriteSongs,
    });
  };

  updateAlbumInfos = async () => {
    const { match: { params } } = this.props;

    const [albumInfos, ...albumMusics] = await fetchAlbumMusicsById(params.id);
    const { collectionName, artistName, artworkUrl100 } = albumInfos;

    this.setState({
      albumArtist: artistName,
      albumCover: artworkUrl100,
      albumMusics,
      albumTitle: collectionName,
      isLoading: false,
    });
  };

  render() {
    const {
      albumArtist, albumCover, albumMusics,
      albumTitle, favoriteSongs, isLoading,
    } = this.state;

    if (isLoading) {
      return <Loading className="Album__Loading" />;
    }

    return (
      <>
        <Header className="Album__Header">
          <img
            src={ albumCover }
            className="Header__album-cover"
            alt={ `Capa do álbum ${albumTitle}` }
          />
          <div className="Header__album-text-contents">
            <h1 className="Header__album-title">{ albumTitle }</h1>
            <h2 className="Header__album-artist">{ albumArtist }</h2>
          </div>
        </Header>
        <main className="Album__main">
          <MusicsList
            updateFavorites={ this.updateFavorites }
            favoriteSongs={ favoriteSongs }
            albumMusics={ albumMusics }
          />
        </main>
      </>
    );
  }
}

AlbumContent.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
