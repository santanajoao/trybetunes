import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong } from '../services/favoriteSongsAPI';

export default class MusicCard extends Component {
  handleSong = async (music, isFavorite) => {
    if (isFavorite) {
      await removeSong(music);
    } else {
      await addSong(music);
    }
  };

  handleCheckboxClick = async () => {
    const { music, isFavorite } = this.props;
    const { handleLoading, updateFavoriteSongs } = this.props;

    handleLoading();

    await this.handleSong(music, isFavorite);
    await updateFavoriteSongs();

    handleLoading();
  };

  render() {
    const { music, isFavorite } = this.props;
    const { trackName, previewUrl, trackId } = music;

    return (
      <li>
        <h3>{ trackName }</h3>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
          .
        </audio>

        <label
          htmlFor={ `favorite-input-${trackId}` }
          data-testid={ `checkbox-music-${trackId}` }
        >
          Favorita
          <input
            checked={ isFavorite }
            type="checkbox"
            onChange={ this.handleCheckboxClick }
            id={ `favorite-input-${trackId}` }
          />
        </label>
      </li>
    );
  }
}

MusicCard.propTypes = {
  music: PropTypes.shape({
    trackId: PropTypes.number.isRequired,
    trackName: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
  }).isRequired,
  handleLoading: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  updateFavoriteSongs: PropTypes.func.isRequired,
};
