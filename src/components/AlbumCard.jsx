import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AlbumCard extends Component {
  render() {
    const { artistName, artworkUrl100, collectionName } = this.props;
    return (
      <li>
        <img src={ artworkUrl100 } alt={ collectionName } />
        <h3>{ collectionName }</h3>
        <h4>{ artistName }</h4>
      </li>
    );
  }
}

AlbumCard.propTypes = {
  artistName: PropTypes.string,
  artworkUrl100: PropTypes.string,
  collectionName: PropTypes.string,
}.isRequired;
