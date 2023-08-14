import React from "react";
import Navbar from "../components/Navbar";
import "../css/Home.css";
import {
  MdSearch,
  MdOutlineLocationOn,
  MdOutlineDateRange,
} from "react-icons/md";
import bgimage from "../images/ticket-img.jpg";

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
      <img src={bgimage} width="100%" />
      <div className="rush">
        <h3>Big Time Rush</h3>
        <p>Dont miss your chance to see them at the can't get enough tour</p>
      </div>
      <div className="categories">
        <h3>Browse Categories</h3>
        <div className="cat">
          <img src={bgimage} alt="" />
          <img src={bgimage} alt="" />
          <img src={bgimage} alt="" />
          <img src={bgimage} alt="" />
          <img src={bgimage} alt="" />
          <img src={bgimage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
