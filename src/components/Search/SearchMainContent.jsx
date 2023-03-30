import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/Search/SearchMainContent.css';
import Loading from '../Loading';
import AlbumNotFound from './AlbumNotFound';
import SearchAlbumsList from './SearchAlbumsList';

export default class SearchMainContent extends Component {
  render() {
    const { albums, isLoading, searchInput, searchWasDone } = this.props;

    if (isLoading) {
      return <Loading className="Search__Loading" />;
    }

    if (!searchWasDone) {
      return (
        <p className="Search__initial-message">
          Busque por seu artista favorito!
        </p>
      );
    }

    if (albums.length > 0) {
      return <SearchAlbumsList albums={ albums } searchInput={ searchInput } />;
    }

    if (albums.length === 0) {
      return <AlbumNotFound />;
    }
  }
}

SearchMainContent.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
  searchInput: PropTypes.string.isRequired,
  searchWasDone: PropTypes.bool.isRequired,
};
