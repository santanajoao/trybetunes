import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Header.css';

export default class Header extends Component {
  render() {
    const { children, className } = this.props;
    return (
      <header className={ `Header ${className}` }>
        { children }
      </header>
    );
  }
}

Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string.isRequired,
};

Header.defaultProps = {
  children: '',
};
