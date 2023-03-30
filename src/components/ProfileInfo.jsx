import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProfileInfo extends Component {
  render() {
    const { title, children, element } = this.props;

    let displayedEl = null;
    if (element === 'span') {
      displayedEl = <span>{ children }</span>;
    } else if (element === 'p') {
      displayedEl = <p>{ children }</p>;
    }

    return (
      <>
        <h2>{ title }</h2>
        { displayedEl }
      </>
    );
  }
}

ProfileInfo.propTypes = {
  children: PropTypes.string,
  element: PropTypes.string,
  title: PropTypes.string.isRequired,
};

ProfileInfo.defaultProps = {
  children: '',
  element: '',
};
