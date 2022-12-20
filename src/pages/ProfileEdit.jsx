import React, { Component } from 'react';
import SideBar from '../components/SideBar';
import ProfileEditContent from '../components/ProfileEditContent';
import '../styles/ProfileEdit.css';

export default class ProfileEdit extends Component {
  render() {
    return (
      <div data-testid="page-profile-edit" className="ProfileEdit">
        <SideBar />
        <section className="main-section">
          <ProfileEditContent { ...this.props } />
        </section>
      </div>
    );
  }
}
