import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Album/Album.css';
import SideBar from '../components/SideBar/SideBar';
import AlbumContent from '../components/Album/AlbumContent';

export default class Album extends Component {
  render() {
    const { match, history } = this.props;
    return (
      <div className="Album">
        <SideBar history={ history } />
        <div className="Album__container">
          <AlbumContent match={ match } />
        </div>
      </div>
    );
  }
}

Album.propTypes = {
  history: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({}).isRequired,
};
