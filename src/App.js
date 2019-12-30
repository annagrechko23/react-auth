import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from './pages/Login';
import Playlist from './pages/Playlist';
import Header from './components/Header';

function App() {
  return (
   
  <Router>
      <Header />
      <div className="main-wrap">
          <Switch>
              <Route path='/login' render={()=> <Login />} />
              <Route path='/playlist' render={()=> <Playlist />} />
          </Switch>
          </div>
      </Router>

  
    );
}

export default App;