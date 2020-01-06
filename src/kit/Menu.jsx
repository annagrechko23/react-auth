import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }
  render() {
    const styles = {
      container: {
        position: "absolute",
        top: 0,
        left: 0,
        height: this.state.open ? "100%" : 0,
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        background: "black",
        opacity: 0.95,
        color: "#fafafa",
        transition: "height 0.3s ease",
        zIndex: 2
      },
      menuList: {
        paddingTop: "3rem",
        textAlign: "center"
      },
      items:{
        margin: '20px 0',
        color: "#fafafa",
        textDecoration: 'none',
        fontSize: '24px',
        textTransform: 'uppercase',
        display: 'block'
      },
      close: {
        color: "#fafafa",
        fontSize: '24px',
        position: 'absolute',
        top: '30px',
        cursor: 'pointer',
        right: '60px',
      }
    };
    return (
      <div style={styles.container}>
        {this.state.open ? (
          <div style={styles.menuList}>
            <ul>
              {this.props.menuItems.map((i, index) => (
                <li key={index} >
                  <Link to={i.link} style={styles.items} onClick={this.props.handleLinkClick}>
               {i.title}
              </Link></li>
              ))}
              <li>  <div  style={styles.items} onClick={this.props.logout}>
                Logout
              </div></li>
            </ul>
            <span onClick={this.props.handleLinkClick} style={styles.close}>&times;</span>

          </div>
          
        ) : null}
      </div>
    );
  }
}

export default Menu;
