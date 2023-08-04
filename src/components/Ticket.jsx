import React from "react";
import "../css/Ticket.css";
import btn from "../images/button-img.png";
import ver from "../images/verified-img.jpg";
import tick from "../images/ticket-img.jpg";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";

const Ticket = () => {
  return (
    <div>
      <nav>
        <MdClose className="icon" />
        <p>My Tickets</p>
      </nav>
      <div className="ticket-container">
        <div className="tickets">
          {[1, 2].map((x, index) => {
            return (
              <div className="ticket" key={index}>
                <div className="ticket-nav">Standard Ticket</div>
                <div className="ticket-nav2">
                  <p>
                    SEC <br />
                    <strong>Floor</strong>
                  </p>
                  <p>
                    ROW
                    <br />
                    <strong>GA</strong>
                  </p>
                  <p>
                    SEAT <br />
                    <strong>-</strong>
                  </p>
                </div>
                <div className="image-container">
                  <div className="bg"></div>
                  <img src={tick} alt="ticket-pic" />
                  <div className="text">
                    <p className="tour">Harry Styles - Love on Tour</p>
                    <p className="date">Fri Jul 29, 9:00pm • WiZink Center</p>
                  </div>
                </div>
                <section>
                  <div>
                    <img src={btn} alt="button-img" width="100%" />
                  </div>
                  <div>
                    <Link to="">View Barcode</Link>
                    <Link to="">Ticket Details</Link>
                  </div>
                </section>
                <img src={ver} alt="" width="100%" className="verified" />
              </div>
            );
          })}
        </div>
        <div className="btn-containetr">
          <button className="transfer-btn" id="modal-button">
            Transfer
          </button>
          <button className="sell-btn">Sell</button>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
