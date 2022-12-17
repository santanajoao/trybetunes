import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Loading.css';
import loadingIcon from '../assets/loading-icon.svg';

export default class Loading extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={ `Loading ${className}` }>
        <img src={ loadingIcon } className="loading-icon" alt="Ícone de carregamento" />
        <h1 className="loading-message">Carregando...</h1>
      </div>
    );
  }
}

Loading.propTypes = {
  className: PropTypes.string,
};

Loading.defaultProps = {
  className: '',
};
