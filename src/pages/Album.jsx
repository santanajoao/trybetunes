import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SideBar from '../components/SideBar';
import getMusics from '../services/musicsAPI';
import AlbumContent from '../components/AlbumContent';

export default class Album extends Component {
  state = {
    albumMusics: [],
    collectionName: '',
    artistName: '',
    isLoading: false,
    albumCape: '',
  };

  componentDidMount() {
    this.updateAlbumMusics();
  }

  updateAlbumMusics = async () => {
    const { match: { params } } = this.props;

    const musics = await getMusics(params.id);
    const { artistName, collectionName, artworkUrl100 } = musics[0];
    this.setState({
      artistName,
      collectionName,
      albumMusics: musics.slice(1),
      albumCape: artworkUrl100,
    });
  };

  handleLoading = () => {
    this.setState(({ isLoading }) => {
      if (isLoading) {
        return { isLoading: false };
      }
      return { isLoading: true };
    });
  };

  render() {
    return (
      <div data-testid="page-album">
        <SideBar />
        <section className="main-section">
          <AlbumContent { ...this.state } handleLoading={ this.handleLoading } />
        </section>
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
