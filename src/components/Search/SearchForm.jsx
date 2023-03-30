import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/Search/SearchForm.css';
import searchIcon from '../../assets/white-search-icon.svg';
import RoundedInput from '../RoundedInput';

export default class SearchForm extends Component {
  state = {
    searchInput: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { handleSearch } = this.props;
    const { searchInput } = this.state;
    handleSearch(searchInput);

    this.setState({ searchInput: '' });
  };

  onInputChange = ({ target }) => {
    const { value } = target;
    this.setState({
      searchInput: value,
    });
  };

  render() {
    const { searchInput } = this.state;

    return (
      <form onSubmit={ this.handleSubmit } className="SearchForm">
        <RoundedInput
          value={ searchInput }
          placeholder="Nome do artista"
          onChange={ this.onInputChange }
          className="SearchForm__input"
        />
        <img
          src={ searchIcon }
          className="SearchForm__search-icon"
          alt="Lupa ícone de busca"
        />
        <button type="submit" className="SearchForm__button">Procurar</button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
