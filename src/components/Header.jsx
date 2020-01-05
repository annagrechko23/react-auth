import React, { Component }  from "react";
import { Link } from "react-router-dom";
import { userActions }from './../modules/action';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class Header extends Component {
  componentDidMount() {
    let { getProfile } = this.props;
    getProfile();
  }
  logout = () => {
    let { logout } = this.props;
    logout();
  };
  render() {
    const { authentication } = this.props;
    const { user } = this.props;
    return (
      <div>
        <ul className="navbar-nav mr-auto">
          <li >
          {authentication ? (
          <div  className="nav-link" onClick={this.logout} >Logout</div>
          ) : (
            <Link to="/login" className="nav-link">
                  login
                </Link>
          )}
          </li>
          <li>
          {authentication ? (
             <div  className="nav-link" >{user.name}{user.surnname}</div>
          ) : (
            <div></div>
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

const mapDispatchToProps = (dispatch) => {
  return { 
    logout: () => dispatch(userActions.logout()),
    getProfile: () => dispatch(userActions.getProfile()),
  }
};

const mapStateToProps = (state) => {
  console.log(state)
  return { 
    user: state.user,
    authentication: state.authentication
  }
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps, null)(Header));