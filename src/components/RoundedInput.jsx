import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/RoundedInput.css';

export default class RoundedInput extends Component {
  render() {
    const { className, onChange, placeholder, value } = this.props;
    return (
      <input
        value={ value }
        type="text"
        placeholder={ placeholder }
        onChange={ onChange }
        className={ `RoundedInput ${className}` }
      />
    );
  }
}

RoundedInput.propTypes = {
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
