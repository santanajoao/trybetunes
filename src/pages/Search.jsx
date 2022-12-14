import React, { Component } from 'react';
import Header from '../components/Header';

export default class Search extends Component {
  state = {
    artistName: '',
    isBtnDisabled: true,
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      artistName: value,
      isBtnDisabled: value.length < 2,
    });
  };

  render() {
    const { artistName, isBtnDisabled } = this.state;
    return (
      <div data-testid="page-search">
        <Header />

        <form>
          <input
            value={ artistName }
            type="text"
            placeholder="Nome do Artista"
            onChange={ this.handleChange }
            data-testid="search-artist-input"
          />

          <button
            type="submit"
            disabled={ isBtnDisabled }
            data-testid="search-artist-button"
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}
