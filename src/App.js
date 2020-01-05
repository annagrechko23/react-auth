import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { connect } from 'react-redux';
import { PrivateRoute } from './components/PrivateRoute';
import Login from './pages/Login';
import Playlist from './pages/Playlist';
import Header from './components/Header';
import { history } from './modules/history';
class App extends Component {
  render() {
    return (

      <Router history={history}>
        <Header />
        <div className="main-wrap">
          <Switch>
            <PrivateRoute exact path="/playlist" authed={this.props.authentication} component={() => <Playlist />} />
            <Route path='/login' render={() => <Login />} />
            <Redirect from="*" to="/playlist" />
          </Switch>
        </div>
      </Router>

    );
  }
}
const mapStateToProps = state => ({ authentication: state.authentication });
export default connect(mapStateToProps)(App);