import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/Login/LinkButton.css';

export default class LinkButton extends Component {
  render() {
    const { className, children, disabled, to } = this.props;
    return (
      <button
        type="submit"
        to={ to }
        disabled={ disabled }
        className={ `LinkButton ${className}` }
      >
        { children }
      </button>
    );
  }
}

LinkButton.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
};
