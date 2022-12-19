import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import userImg from '../assets/user-icon.png';

export default class ProfileContent extends Component {
  state = {
    userInfos: {},
    isLoading: false,
  };

  componentDidMount() {
    this.updateUserInfosState();
  }

  updateUserInfosState = async () => {
    this.setState({ isLoading: true });
    const user = await getUser();
    this.setState({ userInfos: user, isLoading: false });
  };

  render() {
    const { isLoading, userInfos } = this.state;
    const { email, image, name, description } = userInfos;

    if (isLoading) return <Loading />;

    return (
      <>
        <header className="profile-header" />
        <main className="profile-content">
          <img
            src={ image || userImg }
            data-testid="profile-image"
            className="profile-image"
            alt={ name }
          />
          <ul className="infos-list">
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
          <Link to="/profile/edit" className="edit-link">Editar perfil</Link>
        </main>
      </>
    );
  }
}
