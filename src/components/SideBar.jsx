import React, { Component } from 'react';
import '../styles/SideBar.css';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import Logo from './Logo';
import NavBar from './NavBar';
import UserCard from './UserCard';
import userIcon from '../assets/user-icon.png';

export default class SideBar extends Component {
  state = {
    username: '',
    image: userIcon,
  };

  async componentDidMount() {
    this.setUsername();
  }

  setUsername = async () => {
    const { name, image } = await getUser();
    this.setState({
      username: name,
      image: image || userIcon,
    });
  };

  render() {
    const { username } = this.state;

    return (
      <aside data-testid="header-component" className="SideBar">
        <Logo />

        <NavBar />

        { !username ? <Loading /> : <UserCard { ...this.state } /> }
      </aside>
    );
  }
}
