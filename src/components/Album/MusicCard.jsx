import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/Album/MusicCard.css';
import { addFavoriteSong, removeFavoriteSong } from '../../utils/localstorage';
import Loading from '../Loading';

export default class MusicCard extends Component {
  state = {
    isLoading: false,
  };

  handleChange = async ({ target }) => {
    const { music, updateFavorites } = this.props;
    this.setState({ isLoading: true });
    if (target.checked) {
      await addFavoriteSong(music);
    } else {
      await removeFavoriteSong(music);
    }

    await updateFavorites();
    this.setState({ isLoading: false });
  };

  render() {
    const { music, checked } = this.props;
    const { previewUrl, trackName } = music;
    const { isLoading } = this.state;

    return (
      <li className="MusicCard">
        <h3 className="MusicCard__title">{ trackName }</h3>

        <audio src={ previewUrl } className="MusicCard__audio" controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code> audio</code>
          .
        </audio>

        { isLoading ? <Loading className="MusicCard__Loading" /> : (
          <input
            checked={ checked }
            type="checkbox"
            onChange={ this.handleChange }
            className="MusicCard__checkbox"
          />
        ) }

      </li>
    );
  }
}

MusicCard.propTypes = {
  checked: PropTypes.bool.isRequired,
  music: PropTypes.shape({
    previewUrl: PropTypes.string,
    trackName: PropTypes.string,
  }).isRequired,
  updateFavorites: PropTypes.func.isRequired,
};
