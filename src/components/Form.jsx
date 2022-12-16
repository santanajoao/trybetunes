import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {
    const {
      handleChange, handleSubmit, inputValue, isBtnDisabled,
    } = this.props;

    return (
      <form onSubmit={ handleSubmit }>
        <input
          value={ inputValue }
          type="text"
          placeholder="Nome do Artista"
          onChange={ handleChange }
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
    );
  }
}

Form.propTypes = {
  inputValue: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  isBtnDisabled: PropTypes.bool,
}.isRequired;
