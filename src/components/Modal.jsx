import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "../css/Ticket.css";
import { Link } from "react-router-dom";
import { IoMdCheckmark } from "react-icons/io";

const Modal = ({ show, handleShow }) => {
  let [click1, setClick1] = useState(true);
  let [click2, setClick2] = useState(true);
  let [count, setCount] = useState(0);

  const handleClick1 = () => {
    if (click1 === true) {
      setCount((count += 1));
      setClick1(false);
    } else {
      setCount((count -= 1));
      setClick1(true);
    }
  };
  const handleClick2 = () => {
    if (click2 === true) {
      setCount((count += 1));
      setClick2(false);
    } else {
      setCount((count -= 1));
      setClick2(true);
    }
  };
  return (
    <div>
      <div id="bg" className={`${show ? "bg-show" : "bg-hide"}`}></div>
      <div
        className={`modal-container ${
          show ? "modal-container-show" : "modal-container-hide"
        }`}
        id="modal-container"
      >
        <div className="mod-container">
          <h6>SELECT TICKETS TO TRANSFER</h6>
          <div className="line"></div>
          <div className="imark">
            <span>i</span>
            <p>
              Only transfer tickets to people you know and trust to ensure
              everyone stays safe and socially distanced.
            </p>
          </div>
          <div className="floor">
            <p>Sec Floor, Row GA</p>
            <span>
              <iconify-icon icon="ion:ticket-sharp"></iconify-icon>&nbsp;2
              tickets
            </span>
          </div>
          <div className="seat">
            <div>
              <p>SEAT-</p>
              <span
                onClick={handleClick1}
                className={`${click1 ? "unclicked" : "clicked"}`}
              >
                <IoMdCheckmark />
              </span>
            </div>
            <div>
              <p>SEAT-</p>
              <span
                onClick={handleClick2}
                className={`${click2 ? "unclicked" : "clicked"}`}
              >
                <IoMdCheckmark />
              </span>
            </div>
          </div>
          <div className="line"></div>
          <div className="floor top">
            <p>{count} Selected</p>
            <span>
              <Link to="">
                TRANSFER T0
                <iconify-icon icon="dashicons:arrow-right-alt2"></iconify-icon>
              </Link>
            </span>
          </div>
          <MdClose className="close-icon" onClick={handleShow} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
