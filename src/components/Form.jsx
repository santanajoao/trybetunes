import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Form.css';

export default class Form extends Component {
  render() {
    const {
      handleChange, handleSubmit, inputValue, isBtnDisabled,
    } = this.props;

    return (
      <form onSubmit={ handleSubmit } className="Form">
        <input
          value={ inputValue }
          type="text"
          placeholder="Digite a sua pesquisa"
          onChange={ handleChange }
          data-testid="search-artist-input"
          className="search-input"
        />

        <button
          type="submit"
          disabled={ isBtnDisabled }
          data-testid="search-artist-button"
          className="search-button"
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
