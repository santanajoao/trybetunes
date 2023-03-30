import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/SideBar/SideBar.css';
import TrybetunesLogo from '../TrybetunesLogo';
import LinkItem from './LinkItem';
import searchIcon from '../../assets/search-icon.svg';
import favoritesIcon from '../../assets/favorites-icon.svg';
import profileIcon from '../../assets/profile-icon.svg';
import SideBarUserCard from './SideBarUserCard';

export default class SideBar extends Component {
  render() {
    const { history } = this.props;
    return (
      <aside className="SideBar">
        <TrybetunesLogo className="SideBar__trybetunes-logo" />
        <nav className="SideBar__nav">
          <ul className="nav__links-list">
            <LinkItem to="/search" icon={ searchIcon }>Pesquisa</LinkItem>
            <LinkItem to="/favorites" icon={ favoritesIcon }>
              Favoritas
            </LinkItem>
            <LinkItem to="/profile" icon={ profileIcon }>Perfil</LinkItem>
          </ul>
        </nav>
        <SideBarUserCard history={ history } />
      </aside>
    );
  }
}

SideBar.propTypes = {
  history: PropTypes.shape({}).isRequired,
};
