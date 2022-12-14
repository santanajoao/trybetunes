import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

export default class Album extends Component {
  state = {
    albumMusics: [],
    collectionName: '',
    artistName: '',
  };

  componentDidMount() {
    this.updateAlbumMusics();
  }

  updateAlbumMusics = async () => {
    const { match: { params } } = this.props;
    const musics = await getMusics(params.id);
    const { artistName, collectionName } = musics[0];
    this.setState({
      artistName,
      collectionName,
      albumMusics: musics.slice(1),
    });
  };

  render() {
    const { collectionName, artistName, albumMusics } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <main>
          <h1 data-testid="album-name">{ collectionName }</h1>
          <h2 data-testid="artist-name">{ artistName }</h2>
          <ul>
            {albumMusics.map((music) => (
              <MusicCard key={ music.trackId } { ...music } />
            ))}
          </ul>
        </main>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
