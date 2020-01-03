import React, { Component }  from "react";
import { Link } from "react-router-dom";
import { userActions }from './../modules/action';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  console.log(state)
  return { 
    items: state,
  }
};
const mapDispatchToProps = (dispatch) => {
  return { 
    logout: () => dispatch(userActions.logout()),
  }
};
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLogged: true
    }
  }
  logout = () => {
    let { logout } = this.props;
    logout()
  };
  render() {
    return (
      <div>
        <ul className="navbar-nav mr-auto">
          <li >
          {this.state.isLogged ? (
          <div  className="nav-link" onClick={this.logout} >Logout</div>
      ) : (
        <Link to="/login" className="nav-link">
              login
            </Link>
      )}
          </li>
          <li >
            <Link to="/playlist"  className="nav-link">
              Playlist
            </Link>
          </li>
         
        </ul>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);