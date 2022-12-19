import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import AlbumsList from './AlbumsList';
import AlbumNotFound from './AlbumNotFound';

export default class SearchContent extends Component {
  render() {
    const { isLoading, searchWasDone, albums } = this.props;

    if (isLoading) return <Loading />;

    if (searchWasDone && albums.length === 0) {
      return <AlbumNotFound />;
    }

    if (searchWasDone) return <AlbumsList { ...this.props } />;

    return null;
  }
}

SearchContent.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.object,
  ),
  isLoading: PropTypes.bool,
  searchWasDone: PropTypes.bool,
}.isRequired;
