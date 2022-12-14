import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import AlbumsList from './AlbumsList';

export default class SearchContent extends Component {
  render() {
    const { isLoading, searchWasDone, albums } = this.props;

    if (isLoading) return <Loading />;

    if (searchWasDone && albums.length === 0) {
      return <p>Nenhum álbum foi encontrado</p>;
    }

    if (searchWasDone) return <AlbumsList { ...this.props } />;

    return null;
  }
}

SearchContent.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
  searchWasDone: PropTypes.bool.isRequired,
};
