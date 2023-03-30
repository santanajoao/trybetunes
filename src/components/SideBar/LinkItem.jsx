import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../styles/SideBar/LinkItem.css';

export default class LinkItem extends Component {
  render() {
    const { to, children, icon } = this.props;
    return (
      <li className="LinkItem">
        <Link to={ to } className="LinkItem__anchor">
          <img src={ icon } className="LinkItem__image" alt={ `Ícone de ${children}` } />
          <h3 className="LinkItem__title">{ children }</h3>
        </Link>
      </li>
    );
  }
}

LinkItem.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
