import React, { Component } from 'react';
import '../styles/Search.css';
import SideBar from '../components/SideBar';
import Form from '../components/Form';
import SearchContent from '../components/SearchContent';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

export default class Search extends Component {
  state = {
    artistName: '',
    inputValue: '',
    isBtnDisabled: true,
    isLoading: false,
    searchWasDone: false,
    albums: [],
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      inputValue: value,
      isBtnDisabled: value.length < 2,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { inputValue } = this.state;

    this.setState({
      artistName: inputValue,
      inputValue: '',
      isLoading: true,
    });

    const albums = await searchAlbumsAPI(inputValue);

    this.setState({
      isLoading: false,
      searchWasDone: true,
      albums,
    });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const props = { handleChange, handleSubmit, ...this.state };
    return (
      <div data-testid="page-search" className="Search">
        <SideBar />
        <main className="search-main">
          <Form { ...props } />
          <SearchContent { ...props } />
        </main>
      </div>
    );
  }
}
