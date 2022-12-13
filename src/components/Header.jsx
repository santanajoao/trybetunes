import React, { Component } from 'react';
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
      </header>
    );
  }
}
