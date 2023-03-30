import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Search/Search.css';
import Header from '../components/Header';
import SideBar from '../components/SideBar/SideBar';
import SearchForm from '../components/Search/SearchForm';
import SearchMainContent from '../components/Search/SearchMainContent';
import { fetchAlbumsByArtist } from '../utils/itunesAPI';

export default class SearchResult extends Component {
  state = {
    albums: [],
    isLoading: true,
    searchInput: '',
  };

  componentDidMount() {
    this.handleMount();
  }

  handleSearch = async (searchInput) => {
    const { history } = this.props;
    const searchKeyword = searchInput.replace(/\b\s+\b/g, '+');
    history.push(`/search/${searchKeyword}/`);
  };

  handleMount = async () => {
    const { match: { params } } = this.props;
    // const albums = await fetchAlbumsByArtist(params.keyword);
    // this.setState({
    //   albums,
    //   isLoading: false,
    //   searchInput: params.keyword.replace(/\+/g, ' '),
    // });
  };

  render() {
    const { history } = this.props;
    const { albums, isLoading, searchInput } = this.state;
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
              searchInput={ searchInput }
              isLoading={ isLoading }
              albums={ albums }
            />
          </main>
        </div>
      </div>
    );
  }
}

SearchResult.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      keyword: PropTypes.string,
    }),
  }).isRequired,
};
