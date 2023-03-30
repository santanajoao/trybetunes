import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import PageNotFound from './pages/PageNotFound';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/album/:id" component={ Album } />
          <Route path="/favorites" component={ Favorites } />
          <Route path="/profile/edit" component={ ProfileEdit } />
          <Route path="/profile" component={ Profile } />
          <Route path="/search" exact component={ Search } />
          <Route path="/" exact component={ Login } />
          <Route path="*" component={ PageNotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}
