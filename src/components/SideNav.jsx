import React from "react";
import ticket from "../images/ticket.png";
import { MdOutlineLocationOn, MdSearch, MdNotifications } from "react-icons/md";
import { RiHeartsFill } from "react-icons/ri";
import { GiTicket } from "react-icons/gi";
import { FaMoneyBillWave } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";

const SideNav = ({ show }) => {
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
        </ul>
      </div>
    </nav>
  );
};

export default SideNav;
