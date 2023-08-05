import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navBar">
      <Link to="/">TICKETS</Link>
      <Link to="/create">CREATE</Link>
      <Link to="/edit">EDIT</Link>
      <Link to="/ticket">TICKET</Link>
      <span>LOGOUT</span>
    </nav>
  );
};

export default Navbar;
