import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AlbumCard from './AlbumCard';

export default class AlbumsList extends Component {
  render() {
    const { albums, artistName } = this.props;

    return (
      <div className="AlbumsList">
        <p>{ `Resultado de álbuns de: ${artistName}` }</p>
        <ul>
          {albums.map((album) => (
            <Link
              key={ album.collectionId }
              to={ `/album/${album.collectionId}` }
              data-testid={ `link-to-album-${album.collectionId}` }
            >
              <AlbumCard { ...album } />
            </Link>))}
        </ul>
      </div>
    );
  }
}

AlbumsList.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      collectionId: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  artistName: PropTypes.string.isRequired,
};
