import React from "react";
import Navbar from "../components/Navbar";
import "../css/Home.css";
import {
  MdSearch,
  MdOutlineLocationOn,
  MdOutlineDateRange,
} from "react-icons/md";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <form action="">
          <div className="zip-date">
            <div>
              <MdOutlineLocationOn />
              <span>City or Zip Code</span>
            </div>
            <div>
              <MdOutlineDateRange />
              <span>All Dates</span>
            </div>
          </div>
          <div className="search">
            <MdSearch />
            <input
              type="text"
              placeholder="Search for artists, venues and events"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
