import React from "react";
import profile from "./profile.png";
import Gallery from "./Gallery";
import PostDetails from "./PostDetails";
import Account from "./Account";
import Todo from "./Todo";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link className="navbar-brand" to="/home">
          © 2023 Copyright: Panorbit
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/home">
                Twitter
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
