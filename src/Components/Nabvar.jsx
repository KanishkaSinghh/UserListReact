import React from "react";
import profile from "./profile.png";
import Gallery from "./Gallery";
import PostDetails from "./PostDetails";
import Account from "./Account";
import Todo from "./Todo";
import { Link } from "react-router-dom";

function Nabvar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/home">
          Panorbit
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
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/account">
                Account
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/toDo">
                To Do
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/postdetails">
                Post Details
              </Link>
            </li>
          </ul>
        </div>
        <img src={profile} alt="Logo" class="img-thumbnail" />
      </nav>
    </div>
  );
}

export default Nabvar;
