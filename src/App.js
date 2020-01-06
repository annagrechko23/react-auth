import React, { Component } from 'react';
import {
  Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { PrivateRoute } from './components/PrivateRoute';
import {Playlist, Login, Profile, Favourites} from './pages';
import Header from './components/Header';
import { history } from './helpers/history';
class App extends Component {
  render() {
    return (

      <Router history={history}>
        <Header />
        <div className="main-wrap">
          <Switch>
            <PrivateRoute exact path="/playlist" component={() => <Playlist />} />
            <PrivateRoute exact path="/profile" component={() => <Profile />} />
            <PrivateRoute exact path="/favourite" component={() => <Favourites />} />
            <Route path='/login' render={() => <Login />} />
            <Redirect from="*" to="/playlist" />
          </Switch>
        </div>
      </Router>

    );
  }
}
export default App;