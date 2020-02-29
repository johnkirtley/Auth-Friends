import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom'

import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Friends from './components/Friends';
import AddUser from './components/AddUser'


const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute exact path='/friends' component={Friends} />
        <PrivateRoute exact path='/add_user' component={AddUser} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </div>
  )
}

export default App;