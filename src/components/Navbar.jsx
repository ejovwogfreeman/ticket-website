import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <nav className="navBar">
      <Link to="/">TICKETS</Link>
      <Link to="/create">CREATE</Link>
      {/* <Link to="/edit">EDIT</Link> */}
      <Link to="/ticket">TICKET</Link>
      <span onClick={logout} style={{ cursor: "pointer" }}>
        LOGOUT
      </span>
    </nav>
  );
};

export default Navbar;
