import React from "react";
import "../styles/Navbar.css";

class Navbar extends React.Component {

  render() {
    return (
      <nav className="navbar fixed-top w-100" id="myNavbar">
        <div className="container-fluid">
          <a className="navbar-brand text-white" id="brand" href="/">Clicky Game</a>
          <h2 className="nav-item text-white text-center" id="confirmGuess">{this.props.status}</h2>
          <h2 className="nav-item text-white float-right" id="scoreBoard">Score: {this.props.currentScore} | Top Score: {this.props.topScore}</h2>
        </div>
      </nav>
    )
  } 
}

export default Navbar;