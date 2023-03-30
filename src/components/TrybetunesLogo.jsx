import React, { Component } from 'react';
import PropTypes from 'prop-types';
import trybetunesLogo from '../assets/trybetunes-logo.svg';
import '../styles/TrybetunesLogo.css';

export default class TrybetunesLogo extends Component {
  render() {
    const { className } = this.props;
    return (
      <img
        src={ trybetunesLogo }
        className={ className }
        alt="Logo do Trybetunes"
      />
    );
  }
}

TrybetunesLogo.propTypes = {
  className: PropTypes.string.isRequired,
};
