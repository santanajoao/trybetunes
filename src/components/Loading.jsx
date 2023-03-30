import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Loading.css';
import loadingIcon from '../assets/loading-icon.svg';

export default class Loading extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={ `Loading ${className}` }>
        <img
          src={ loadingIcon }
          className="Loading__icon"
          alt="Ícone de carregamento"
        />
        <h2 className="Loading__message">Carregando...</h2>
      </div>
    );
  }
}

Loading.propTypes = {
  className: PropTypes.string.isRequired,
};
