import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [textToCopy, setTextToCopy] = useState("Text to copy");
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1500);
      })
      .catch((error) => {
        console.error("Copy to clipboard failed:", error);
      });
  };

  const authToken = JSON.parse(localStorage.getItem("user")).token;
  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await axios.delete(
        `https://ticket-website.onrender.com/api/ticket/delete/${id}`,
        config
      );
      alert("TICKET DELETED SUCCESSFULLY");
      setLoading(false);
      window.location.reload();
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const authToken = JSON.parse(localStorage.getItem("user")).token;
        const config = {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        };
        const response = await axios.get(
          "https://ticket-website.onrender.com/api/ticket/",
          config
        );
        console.log(response.data);
        setTickets(response.data);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };

    fetchTickets();
  }, []);

  return (
    <div>
      <Navbar />
      <ul className="ticketlist-container">
        <h2>All Tickets</h2>
        {tickets.length > 0 ? (
          <>
            {tickets.map((ticket) => (
              <li key={ticket._id}>
                <div className="cont">
                  <div className="img-box">
                    <div className="spans">
                      <span>{ticket.title}</span>
                      <span> {ticket.artist}</span>
                    </div>
                    <button
                      onClick={() => handleDelete(ticket._id)}
                      disabled={loading}
                      style={{
                        background: loading
                          ? "rgba(21, 95,	200, 0.8)"
                          : "#155fc8",
                      }}
                    >
                      {loading ? "LOADING" : "DELETE"}
                    </button>
                  </div>
                  <div className="clipboard">
                    <input
                      disabled
                      type="text"
                      value={textToCopy}
                      onChange={(e) => setTextToCopy(e.target.value)}
                    />
                    <button
                      onClick={handleCopyToClipboard}
                      disabled={isCopied}
                      style={{
                        background: isCopied
                          ? "rgba(21, 95,	200, 0.8)"
                          : "#155fc8",
                      }}
                    >
                      {isCopied ? "Copied!" : "Copy to Clipboard"}
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </>
        ) : (
          "loading"
        )}
      </ul>
    </div>
  );
};

export default Tickets;
