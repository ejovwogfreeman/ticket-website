import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import ticketlogo from "../images/ticketlogo.png";
import SideNav from "./SideNav";

const Navbar = () => {
  // const logout = () => {
  //   localStorage.removeItem("user");
  //   window.location.reload();
  // };

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <nav className="navBar">
      {/* <Link to="/">TICKETS</Link>
      <Link to="/create">CREATE</Link>
      <span onClick={logout} style={{ cursor: "pointer" }}>
        LOGOUT
      </span> */}
      <div
        className={show ? "bg-dark" : "bg-dark-hide"}
        onClick={handleShow}
      ></div>
      <SideNav show={show} />
      <div>
        <GiHamburgerMenu style={{ fontSize: "30px" }} onClick={handleShow} />
      </div>
      <div>
        <img src={ticketlogo} alt="ticket-logo" width="150px" />
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;
