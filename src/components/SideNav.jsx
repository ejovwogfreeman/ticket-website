import React from "react";
import ticket from "../images/ticket.png";
import { MdOutlineLocationOn, MdSearch, MdNotifications } from "react-icons/md";
import { RiHeartsFill } from "react-icons/ri";
import { GiTicket } from "react-icons/gi";
import { FaMoneyBillWave } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoIosCreate } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";

const SideNav = ({ show }) => {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  let user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className={show ? "sideNavShow" : "sideNav"}>
      <div className="nav-items">
        <div className="nav-top">
          <spann className="bottom">
            <img src={ticket} alt="" /> <br />
            <span>Sign In</span>
          </spann>
        </div>
        <ul className="links">
          <li>
            <MdOutlineLocationOn />
            <span>Unknown</span>
          </li>
          <li>
            <MdSearch />
            <span>Discover</span>
          </li>
          <li>
            <RiHeartsFill />
            <span>Favorites</span>
          </li>
          <li>
            <GiTicket />
            <span>My Events</span>
          </li>
          <li>
            <FaMoneyBillWave />
            <span>Sell</span>
          </li>
          <li>
            <MdNotifications />
            <span>Notifications</span>
          </li>
          <li>
            <BsPersonCircle />
            <span>My Account</span>
          </li>
          <>
            {user ? (
              <div className="auth-links">
                <li>
                  <GiTicket />
                  <Link to="/">Tickets</Link>
                </li>
                <li>
                  <IoIosCreate />
                  <Link to="/create">Create</Link>
                </li>
                <li span onClick={logout} style={{ cursor: "pointer" }}>
                  <BiLogOut />
                  <span> Logout</span>
                </li>
              </div>
            ) : (
              ""
            )}
          </>
        </ul>
      </div>
    </nav>
  );
};

export default SideNav;