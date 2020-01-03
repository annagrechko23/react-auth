import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { PrivateRoute } from './components/PrivateRoute';
import Login from './pages/Login';
import Playlist from './pages/Playlist';
import Header from './components/Header';

function App() {
  
  return (
   
  <Router>
      <Header />
      <div className="main-wrap">
          <Switch>
              <PrivateRoute exact path="/playlist" component={()=> <Playlist />}  />
              <Route path='/login' render={()=> <Login />} />
              <Redirect from="*" to="/playlist" />
          </Switch>
          </div>
      </Router>

  
    );
}
export default App;