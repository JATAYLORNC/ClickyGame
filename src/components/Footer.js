import React from "react";
import "../styles/Footer.css";
import reactlogo from "../images/React-icon.png"

const Footer = () => (
  <div className="text-white pl-2" id="footer">
    <span>Clicky Game!</span>
    <img src={reactlogo} alt="React Logo" id="reactLogo" />
    
  </div>

);

export default Footer;