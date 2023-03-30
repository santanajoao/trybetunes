import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../styles/Search/AlbumCard.css';

export default class AlbumCard extends Component {
  render() {
    const {
      artistName, artworkUrl100, collectionId, collectionName,
    } = this.props;

    return (
      <li className="AlbumCard">
        <Link to={ `/album/${collectionId}` } className="AlbumCard__link">
          <img
            src={ artworkUrl100 }
            className="AlbumCard__image"
            alt={ `Capa do álbum ${collectionName}` }
          />
          <h1 className="AlbumCard__title">{ collectionName }</h1>
          <h2 className="AlbumCard__artist">{ artistName }</h2>
        </Link>
      </li>
    );
  }
}

AlbumCard.propTypes = {
  artistName: PropTypes.string.isRequired,
  artworkUrl100: PropTypes.string.isRequired,
  collectionId: PropTypes.number.isRequired,
  collectionName: PropTypes.string.isRequired,
};
