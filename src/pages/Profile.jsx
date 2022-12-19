import React, { Component } from 'react';
import SideBar from '../components/SideBar';
import ProfileContent from '../components/ProfileContent';
import '../styles/Profile.css';

export default class Profile extends Component {
  render() {
    return (
      <div data-testid="page-profile">
        <SideBar />
        <section className="main-section">
          <ProfileContent />
        </section>
      </div>
    );
  }
}
