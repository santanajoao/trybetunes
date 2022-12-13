import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

export default class Header extends Component {
  state = {
    username: '',
  };

  async componentDidMount() {
    this.setUsername();
  }

  setUsername = async () => {
    const { name } = await getUser();
    this.setState({
      username: name,
    });
  };

  render() {
    const { username } = this.state;

    if (!username) return <Loading />;

    return (
      <header data-testid="header-component">
        <h1 data-testid="header-user-name">
          { username }
        </h1>

        <ul>
          <li>
            <Link to="/search" data-testid="link-to-search">Pesquisa</Link>
          </li>
          <li>
            <Link to="/favorites" data-testid="link-to-favorites">
              Favoritas
            </Link>
          </li>
          <li>
            <Link to="/profile" data-testid="link-to-profile">
              Perfil
            </Link>
          </li>
        </ul>
      </header>
    );
  }
}
