import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AlbumCard from './AlbumCard';
import '../styles/AlbumsList.css';

export default class AlbumsList extends Component {
  render() {
    const { albums, artistName } = this.props;

    return (
      <div className="AlbumsList">
        <p className="message">{ `Resultado de álbuns de: ${artistName}` }</p>

        <ul className="list">
          {albums.map((album) => (
            <li
              key={ album.collectionId }
            >
              <AlbumCard { ...album } />
            </li>))}
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
