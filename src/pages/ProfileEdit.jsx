import React, { Component } from 'react';
import SideBar from '../components/SideBar';
import ProfileEditContent from '../components/ProfileEditContent';

export default class ProfileEdit extends Component {
  render() {
    return (
      <div data-testid="page-profile-edit">
        <SideBar />
        <ProfileEditContent { ...this.props } />
      </div>
    );
  }
}
