import React, { Component } from 'react';
import logo from '../assets/logo.svg';

export default class Logo extends Component {
  render() {
    return (
      <img src={ logo } className="Logo" alt="Trybetunes logo" />
    );
  }
}
