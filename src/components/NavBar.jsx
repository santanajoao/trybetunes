import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../assets/search-icon.svg';
import favoritesIcon from '../assets/favorites-icon.svg';
import profileIcon from '../assets/profile-icon.svg';
import '../styles/NavBar.css';

export default class NavBar extends Component {
  render() {
    return (
      <nav className="NavBar">
        <ul className="links-list">
          <li>
            <Link to="/search" data-testid="link-to-search">
              <img src={ searchIcon } alt="link de pesquisa, uma lupa" />
              <span>Pesquisa</span>
            </Link>
          </li>
          <li>
            <Link to="/favorites" data-testid="link-to-favorites">
              <img
                src={ favoritesIcon }
                alt="Ícone do link de favoritos, uma estrela"
              />
              <span>Favoritas</span>
            </Link>
          </li>
          <li>
            <Link to="/profile" data-testid="link-to-profile">
              <img src={ profileIcon } alt="link do perfil" />
              <span>Perfil</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
