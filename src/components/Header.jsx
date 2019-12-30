import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <ul className="navbar-nav mr-auto">
        <li >
          <Link to="/login" className="nav-link">
            login
          </Link>
        </li>
        <li>
          <Link to="/playlist" className="nav-link">
            playlist
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
