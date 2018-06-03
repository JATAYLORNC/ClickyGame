import React from 'react';
import "../styles/Navbar.css";

const Navbar = () => (
  <nav className="navbar w-100" id="myNavbar">
    <div className="container-fluid">
      <a className="navbar-brand text-white" id="brand" href="/">Clicky Game</a>
      <h2 className="nav-item text-white text-center" id="confirmGuess">You Guessed Correctly!</h2>
      <h2 className="nav-item text-white float-right" id="scoreBoard">Score: 0 | Top Score: 12</h2>
    </div>
  </nav>
);

export default Navbar;