import React from "react";
import { MdClose } from "react-icons/md";

const Modal = () => {
  return (
    <div>
      <div id="bg"></div>
      <div className="modal-container" id="modal-container">
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
              <span></span>
            </div>
            <div>
              <p>SEAT-</p>
              <span></span>
            </div>
          </div>
          <div className="line"></div>
          <div className="floor top">
            <p>0 Selected</p>
            <span>
              <Link to="">
                TRANSFER T0
                <iconify-icon icon="dashicons:arrow-right-alt2"></iconify-icon>
              </Link>
            </span>
          </div>
          <MdClose />
        </div>
      </div>
    </div>
  );
};

export default Modal;
