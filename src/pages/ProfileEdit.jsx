import React, { Component } from 'react';
import Header from '../components/Header';
import ProfileEditContent from '../components/ProfileEditContent';

export default class ProfileEdit extends Component {
  render() {
    return (
      <div data-testid="page-profile-edit">
        <Header />
        <ProfileEditContent { ...this.props } />
      </div>
    );
  }
}
