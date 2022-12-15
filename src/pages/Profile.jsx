import React, { Component } from 'react';
import Header from '../components/Header';
import ProfileContent from '../components/ProfileContent';

export default class Profile extends Component {
  render() {
    return (
      <div data-testid="page-profile">
        <Header />
        <ProfileContent />
      </div>
    );
  }
}
