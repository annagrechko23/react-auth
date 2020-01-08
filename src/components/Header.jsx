import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout, getProfile } from "./../modules/action";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Menu, Icon } from "./../kit";
import { faBars } from "@fortawesome/free-solid-svg-icons";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      menu: [
        {
          title: "Favourites",
          link: "/favourite"
        },
        {
          title: "profile",
          link: "/profile"
        }
      ]
    };
  }
  componentDidMount() {
    const { authentication } = this.props;
    if (authentication) {
      const { getProfile } = this.props;
      getProfile();
    }
  }
  logout = () => {
    this.setState({ menuOpen: false });
    let { logout } = this.props;
    logout();
  };
  handleMenuClick = () => {
    this.setState({ menuOpen: true });
  };

  handleLinkClick = () => {
    this.setState({ menuOpen: false });
  };
  render() {
    const { authentication } = this.props;
    const { user } = this.props;

    return (
      <div>
        <ul className="navbar-nav mr-auto">
          {!authentication ? (
            <li>
              <div className="nav-link">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </div>
            </li>
          ) : (
            <li onClick={this.handleMenuClick}>
              <Icon icon={faBars} color="white" />
            </li>
          )}
          {authentication ? (
            <li>
              <div className="nav-link">
                <span>{user.name} </span>
                {user.surnname}
              </div>
            </li>
          ) : (
            ""
          )}
          <li>
            <Link to="/playlist" className="nav-link">
              Playlist
            </Link>
          </li>
        </ul>
        <Menu
          open={this.state.menuOpen}
          menuItems={this.state.menu}
          handleLinkClick={this.handleLinkClick}
          logout={this.logout}
        ></Menu>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    getProfile: () => dispatch(getProfile())
  };
};

const mapStateToProps = state => {
  return {
    user: state.user,
    authentication: state.authentication
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps, null)(Header)
);
