import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Profile/Profile.css';
import Header from '../components/Header';
import SideBar from '../components/SideBar/SideBar';
import ProfileContent from '../components/Profile/ProfileContent';
import Loading from '../components/Loading';
import { getUserInfos } from '../utils/localstorage';

export default class Profile extends Component {
  state = {
    isLoading: true,
    userInfos: {},
  };

  componentDidMount() {
    this.updateUserInfos();
  }

  updateUserInfos = async () => {
    const userInfos = await getUserInfos();
    this.setState({ userInfos, isLoading: false });
  };

  render() {
    const { isLoading, userInfos } = this.state;
    const { history } = this.props;
    return (
      <div className="Profile">
        <SideBar history={ history } />
        <div className="Profile__container">
          { isLoading ? <Loading className="Profile__Loading" /> : (
            <>
              <Header className="Profile__Header" />
              <main className="Profile__main">
                <ProfileContent userInfos={ userInfos } />
              </main>
            </>
          ) }
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  history: PropTypes.shape({}).isRequired,
};
