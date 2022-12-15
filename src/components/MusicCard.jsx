import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';

export default class MusicCard extends Component {
  // state = {
  //   isFavorite: false,
  // };

  handleCheckboxClick = async () => {
    const { music, handleLoading, updateFavoriteSongs } = this.props;
    // this.setState({ isFavorite: true });
    handleLoading();
    await addSong(music);
    await updateFavoriteSongs();
    handleLoading();
  };

  render() {
    const { music: { trackName, previewUrl, trackId }, checked } = this.props;
    // const { isFavorite } = this.state;

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
          htmlFor="favorite-input"
          data-testid={ `checkbox-music-${trackId}` }
        >
          Favorita
          <input
            checked={ checked }
            type="checkbox"
            onChange={ this.handleCheckboxClick }
            id="favorite-input"
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
  updateFavoriteSongs: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};
