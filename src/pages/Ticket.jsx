import React, { useState, useEffect } from "react";
import "../css/Ticket.css";
import btn from "../images/button-img.png";
import ver from "../images/verified-img.jpg";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import Modal from "../components/Modal";
import axios from "axios";
import { useParams } from "react-router-dom";
import loader from "../images/loading.gif";

const Ticket = () => {
  const params = useParams();
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
    console.log(show);
  };

  const [activeDot, setActiveDot] = useState(1);

  let handleScroll = (e) => {
    if (e.target.scrollLeft > 200) {
      setActiveDot(2);
    } else {
      setActiveDot(1);
    }
  };

  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ticket-website.onrender.com/api/ticket/${params.id}`)
      .then((response) => {
        console.log(response.data);
        setTicket(response.data);
      })
      .catch((error) => {
        console.error("Error fetching ticket:", error);
      });
  }, [params.id]);

  return (
    <div>
      {ticket ? (
        <div>
          <nav>
            <Link to="/" className="icon">
              <MdClose />
            </Link>
            <p>My Tickets</p>
          </nav>
          <div className="ticket-container">
            <div className="tickets" onScroll={handleScroll}>
              <div className="ticket">
                <div className="ticket-nav">{ticket.type}</div>
                <div className="ticket-nav2">
                  <p>
                    SEC <br />
                    <strong>{ticket.sec}</strong>
                  </p>
                  <p>
                    ROW
                    <br />
                    <strong>{ticket.row.split(",")[0]}</strong>
                  </p>
                  <p>
                    SEAT <br />
                    <strong>{ticket.seat.split(",")[0]}</strong>
                  </p>
                </div>
                <div className="image-container">
                  <div className="bg"></div>
                  <img
                    src={`https://ticket-website.onrender.com/api/files/${ticket.image[0].link}`}
                    alt="ticket-pic"
                  />
                  <div className="text">
                    <p className="tour">
                      {ticket.artist} - {ticket.title}
                    </p>
                    <p className="date">
                      {ticket.date} • {ticket.venue}
                    </p>
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
              <div className="ticket">
                <div className="ticket-nav">{ticket.type}</div>
                <div className="ticket-nav2">
                  <p>
                    SEC <br />
                    <strong>{ticket.sec}</strong>
                  </p>
                  <p>
                    ROW
                    <br />
                    <strong>{ticket.row.split(",")[1]}</strong>
                  </p>
                  <p>
                    SEAT <br />
                    <strong>{ticket.seat.split(",")[1]}</strong>
                  </p>
                </div>
                <div className="image-container">
                  <div className="bg"></div>
                  <img
                    src={`https://ticket-website.onrender.com/api/files/${ticket.image[0].link}`}
                    alt="ticket-pic"
                  />
                  <div className="text">
                    <p className="tour">
                      {ticket.artist} - {ticket.title}
                    </p>
                    <p className="date">
                      {ticket.date} • {ticket.venue}
                    </p>
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
            </div>
            <div className="dots-container">
              <div className={activeDot === 1 ? "active-dot" : "dot"}></div>
              <div className={activeDot === 2 ? "active-dot" : "dot"}></div>
            </div>
            <div className="btn-containetr" onClick={handleShow}>
              <button className="transfer-btn" id="modal-button">
                Transfer
              </button>
              <button className="sell-btn">Sell</button>
            </div>
          </div>
          <Modal
            show={show}
            handleShow={handleShow}
            sec={ticket.sec}
            row={ticket.row}
            seat={ticket.seat}
          />
        </div>
      ) : (
        <img
          src={loader}
          alt=""
          style={{
            position: "fixed",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100vh",
          }}
        />
      )}
    </div>
  );
};

export default Ticket;
