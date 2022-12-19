import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/AlbumCard.css';

export default class AlbumCard extends Component {
  render() {
    const { artistName, artworkUrl100, collectionName, collectionId } = this.props;
    return (
      <Link
        to={ `/album/${collectionId}` }
        data-testid={ `link-to-album-${collectionId}` }
        className="AlbumCard"
      >
        <img
          src={ artworkUrl100 }
          className="card-image"
          alt={ collectionName }
        />
        <h3 className="card-name">{ collectionName }</h3>
        <h4 className="card-artist">{ artistName }</h4>
      </Link>
    );
  }
}

AlbumCard.propTypes = {
  artistName: PropTypes.string,
  artworkUrl100: PropTypes.string,
  collectionName: PropTypes.string,
}.isRequired;
