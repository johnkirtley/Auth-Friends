import React from 'react';
import './App.css';

import { Route } from 'react-router-dom'

import Nav from './components/Nav';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Friends from './components/Friends';


const App = () => {
  return (
    <div>
      <Nav />
      <PrivateRoute exact path='/friends' component={Friends} />
      <Route exact path='/login' component={Login} />
    </div>
  )
}

export default App;