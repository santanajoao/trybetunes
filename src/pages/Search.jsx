import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Search/Search.css';
import Header from '../components/Header';
import SideBar from '../components/SideBar/SideBar';
import SearchForm from '../components/Search/SearchForm';
import SearchMainContent from '../components/Search/SearchMainContent';
import { fetchAlbumsByArtist } from '../utils/itunesAPI';

export default class Search extends Component {
  state = {
    isLoading: false,
    searchInput: '',
    albums: [],
    searchWasDone: false,
  };

  handleSearch = async (searchKeyword) => {
    this.setState({ isLoading: true, searchWasDone: true });

    const searchInput = searchKeyword.trim().replace(/\s+/g, ' ');
    const albums = await fetchAlbumsByArtist(searchInput);

    this.setState({
      albums,
      isLoading: false,
      searchInput,
    });
  };

  render() {
    const { history } = this.props;
    const {
      isLoading, searchInput, albums, searchWasDone,
    } = this.state;
    return (
      <div className="Search">
        <SideBar history={ history } />
        <div className="Search__container">
          <Header className="Search__Header">
            <SearchForm
              value={ searchInput }
              handleSearch={ this.handleSearch }
            />
          </Header>
          <main className="Search__main">
            <SearchMainContent
              albums={ albums }
              isLoading={ isLoading }
              searchInput={ searchInput }
              searchWasDone={ searchWasDone }
            />
          </main>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
