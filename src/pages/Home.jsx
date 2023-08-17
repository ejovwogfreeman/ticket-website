import React from "react";
import Navbar from "../components/Navbar";
import "../css/Home.css";
import {
  MdSearch,
  MdOutlineLocationOn,
  MdOutlineDateRange,
} from "react-icons/md";
import bgimage from "../images/ticket-img.jpg";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";

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
      <img src={bgimage} alt="bgpic" width="100%" />
      <div className="rush">
        <h3>Big Time Rush</h3>
        <p>Dont miss your chance to see them at the can't get enough tour</p>
      </div>
      <div className="categories">
        <h3>Browse Categories</h3>
        <div className="cat">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
