import React, { Component } from 'react';
import '../styles/PageNotFound/PageNotFound.css';

export default class PageNotFound extends Component {
  render() {
    return (
      <div className="PageNotFound">
        <span className="PageNotFound__span">Ops!</span>
        <p className="PageNotFound__message">
          A página que você está procurando não foi encontrada.
        </p>
      </div>
    );
  }
}
