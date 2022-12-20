import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LabelInput extends Component {
  render() {
    const {
      complement, value, type, handleChange, label, paragraph, placeholder,
    } = this.props;

    return (
      <label htmlFor={ `input-${complement}` }>
        { label }
        { paragraph && <p>{ paragraph }</p> }
        { (type === 'text') ? (
          <input
            value={ value }
            type="text"
            onChange={ handleChange }
            name={ complement }
            placeholder={ placeholder }
            id={ `input-${complement}` }
            data-testid={ `edit-input-${complement}` }
          />
        ) : (
          <textarea
            value={ value }
            onChange={ handleChange }
            name={ complement }
            placeholder={ placeholder }
            id={ `input-${complement}` }
            data-testid={ `edit-input-${complement}` }
          />
        ) }
      </label>
    );
  }
}

LabelInput.propTypes = {
  complement: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  paragraph: PropTypes.string,
  placeholder: PropTypes.string,
};

LabelInput.defaultProps = {
  paragraph: '',
  placeholder: '',
};
