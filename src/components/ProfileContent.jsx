import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

export default class ProfileContent extends Component {
  state = {
    userInfos: {},
    isLoading: false,
  };

  componentDidMount() {
    this.updateUserInfosState();
  }

  handleLoading = () => {
    this.setState(({ isLoading }) => ({
      isLoading: !isLoading,
    }));
  };

  updateUserInfosState = async () => {
    this.handleLoading();
    const user = await getUser();
    this.setState({ userInfos: user });
    this.handleLoading();
  };

  render() {
    const { isLoading, userInfos } = this.state;
    const { email, image, name, description } = userInfos;

    if (isLoading) return <Loading />;

    return (
      <main>
        <img src={ image } data-testid="profile-image" alt={ name } />
        <Link to="/profile/edit">Editar perfil</Link>
        <ul>
          <li>
            <h3>Nome</h3>
            <span>{ name }</span>
          </li>
          <li>
            <h3>E-mail</h3>
            <span>{ email }</span>
          </li>
          <li>
            <h3>Descrição</h3>
            <span>{ description }</span>
          </li>
        </ul>
      </main>
    );
  }
}
