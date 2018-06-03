import React from "react";
import "../styles/Header.css"

const Header = () => (
  <div className="d-flex align-items-center justify-content-center header">
    <div className="align-items-center">
      <h1 className="pb-4 text-center">Clicky Game!</h1>
      <h2>Click on an image to earn points, but don't click on any more than once!</h2>
    </div>
  </div>
);

export default Header;