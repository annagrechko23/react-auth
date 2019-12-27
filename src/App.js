import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from './pages/Login';
import Playlist from './pages/Playlist';
import Home from './pages/Home';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
      <Header />
          <Switch>
              <Route path='/login' component={Login} />
              <Route path='/Playlist' component={Playlist} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;