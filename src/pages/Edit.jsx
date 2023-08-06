// import React, { useState, useEffect } from "react";
// import "../css/Form.css";
// import logo from "../images/logo.png";
// import Navbar from "../components/Navbar";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";

// const Edit = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [ticketData, setTicketData] = useState({
//     type: "",
//     sec: "",
//     row: "",
//     seat: "",
//     artist: "",
//     title: "",
//     date: "",
//     venue: "",
//   });

//   const { type, sec, row, seat, artist, title, date, venue } = ticketData;

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setTicketData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const authToken = JSON.parse(localStorage.getItem("user")).token;
//   const config = {
//     headers: {
//       Authorization: `Bearer ${authToken}`,
//       "Content-Type": "application/json",
//     },
//   };

//   useEffect(() => {
//     const fetchTicket = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           `http://localhost:8000/api/ticket/${id}`,
//           config
//         );
//         setTicketData(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//         setLoading(false);
//       }
//     };
//     fetchTicket();
//   }, [id]);

//   const handleSubmit = async (event) => {
//     setLoading(true);
//     event.preventDefault();

//     if (
//       !type ||
//       !sec ||
//       !row ||
//       !seat ||
//       !artist ||
//       !title ||
//       !date ||
//       !venue
//     ) {
//       setLoading(false);
//       return alert("PLEASE FILL ALL FIELDS");
//     }

//     try {
//       await axios.put(
//         `http://localhost:8000/api/ticket/update/${id}`,
//         ticketData,
//         config
//       );
//       alert("TICKET UPDATED SUCCESSFULLY");
//       setLoading(false);
//       navigate("/");
//     } catch (error) {
//       console.error(error);
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="form-container">
//         <form onSubmit={handleSubmit}>
//           <img src={logo} alt="" />
//           <label htmlFor="">TYPE</label>
//           <input
//             type="text"
//             value={type}
//             name="type"
//             onChange={handleChange}
//             placeholder="Please enter ticket type"
//           />
//           <label htmlFor="">SEC</label>
//           <input
//             type="text"
//             value={sec}
//             name="sec"
//             onChange={handleChange}
//             placeholder="Please enter sec"
//           />
//           <label htmlFor="">ROW</label>
//           <input
//             type="text"
//             value={row}
//             name="row"
//             onChange={handleChange}
//             placeholder="Please enter row"
//           />
//           <label htmlFor="">SEAT</label>
//           <input
//             type="text"
//             value={seat}
//             name="seat"
//             onChange={handleChange}
//             placeholder="Please enter seat"
//           />
//           <label htmlFor="">ARTIST</label>
//           <input
//             type="text"
//             value={artist}
//             name="artist"
//             onChange={handleChange}
//             placeholder="Please enter artist"
//           />
//           <label htmlFor="">TITLE</label>
//           <input
//             type="text"
//             value={title}
//             name="title"
//             onChange={handleChange}
//             placeholder="Please enter title"
//           />
//           <label htmlFor="">VENUE</label>
//           <input
//             type="text"
//             value={venue}
//             name="venue"
//             onChange={handleChange}
//             placeholder="Please enter venue"
//           />
//           <button
//             disabled={loading}
//             style={{
//               background: loading ? "rgba(21, 95,	200, 0.8)" : "#155fc8",
//             }}
//           >
//             {loading ? "LOADING" : "UPDATE"}
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Edit;
