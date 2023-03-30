import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/Search/SearchAlbumsList.css';
import AlbumCard from './AlbumCard';

export default class SearchAlbumsList extends Component {
  render() {
    const { albums, searchInput } = this.props;
    return (
      <div className="SearchAlbumsList">
        <p className="SearchAlbumsList__message">
          { `Resultado de álbuns de artista: ${searchInput}` }
        </p>

        <ul className="SearchAlbumsList__albums-list">
          { albums.map((album) => (
            <AlbumCard key={ album.collectionId } { ...album } />
          )) }
        </ul>
      </div>
    );
  }
}

SearchAlbumsList.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      collectionId: PropTypes.number,
    }),
  ).isRequired,
  searchInput: PropTypes.string.isRequired,
};
