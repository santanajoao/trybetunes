import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong } from '../services/favoriteSongsAPI';
import '../styles/MusicCard.css';

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
    const { updateFavoriteSongs } = this.props;

    await this.handleSong(music, isFavorite);
    await updateFavoriteSongs();
  };

  render() {
    const { music, isFavorite } = this.props;
    const { trackName, previewUrl, trackId } = music;

    return (
      <li className="MusicCard">
        <h3 className="music-title">{ trackName }</h3>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
          .
        </audio>

        <input
          checked={ isFavorite }
          type="checkbox"
          onChange={ this.handleCheckboxClick }
          id={ `favorite-input-${trackId}` }
          className="favorite-input"
        />
      </li>
    );
  }
}

MusicCard.propTypes = {
  music: PropTypes.shape({
    trackId: PropTypes.number,
    trackName: PropTypes.string,
    previewUrl: PropTypes.string,
  }),
  handleLoading: PropTypes.func,
  isFavorite: PropTypes.bool,
  updateFavoriteSongs: PropTypes.func,
}.isRequired;
