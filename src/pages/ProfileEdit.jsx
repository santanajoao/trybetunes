import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/ProfileEdit/ProfileEdit.css';
import Header from '../components/Header';
import SideBar from '../components/SideBar/SideBar';
import ProfileEditContent from '../components/ProfileEdit/ProfileEditContent';
import Loading from '../components/Loading';
import { getUserInfos, saveUserInfos } from '../utils/localstorage';

export default class ProfileEdit extends Component {
  state = {
    isButtonDisabled: true,
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

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(({ userInfos }) => ({
      userInfos: { ...userInfos, [name]: value },
    }), this.validateFields);
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    this.setState({ isLoading: true });

    const { userInfos } = this.state;
    await saveUserInfos(userInfos);

    const { history } = this.props;
    history.push('/profile/');
  };

  validateFields = () => {
    const { userInfos: { name, email, image, description } } = this.state;

    const empty = !(name && email && image && description);
    const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/.test(email);
    this.setState({
      isButtonDisabled: empty || !validEmail,
    });
  };

  render() {
    const { isLoading, userInfos, isButtonDisabled } = this.state;
    const { history } = this.props;
    return (
      <div className="ProfileEdit">
        <SideBar history={ history } />
        <div className="ProfileEdit__container">
          { isLoading ? <Loading className="ProfileEdit__Loading" /> : (
            <>
              <Header className="ProfileEdit__Header" />
              <main className="ProfileEdit__main">
                <ProfileEditContent
                  userInfos={ userInfos }
                  handleChange={ this.handleChange }
                  isButtonDisabled={ isButtonDisabled }
                  history={ history }
                  handleSubmit={ this.handleSubmit }
                />
              </main>
            </>
          ) }
        </div>
      </div>
    );
  }
}

ProfileEdit.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
