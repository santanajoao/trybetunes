import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/SideBar/SideBarUserCard.css';
import { getUserInfos } from '../../utils/localstorage';
import Loading from '../Loading';

export default class SideBarUserCard extends Component {
  state = {
    image: '',
    isLoading: true,
    name: '',
  };

  componentDidMount() {
    this.updateUserInfosState();
  }

  updateUserInfosState = async () => {
    try {
      const { name, image } = await getUserInfos();
      this.setState({ name, image, isLoading: false });
    } catch {
      const { history } = this.props;
      history.push('/');
    }
  };

  render() {
    const { name, image, isLoading } = this.state;

    if (isLoading) return <Loading className="SideBar__Loading" />;

    return (
      <div className="SideBarUserCard">
        <img
          src={ image }
          className="SideBarUserCard__image"
          alt="Imagem do usuário"
        />
        <span className="SideBarUserCard__name">{ name }</span>
      </div>
    );
  }
}

SideBarUserCard.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
