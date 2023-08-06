import React, { useState } from "react";
import "../css/Form.css";
import logo from "../images/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const user = { username, password };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    if (!username || !password) {
      return alert("PLEASE FILL ALL FIELDS");
    }

    axios
      .post("https://ticket-website.onrender.com/api/auth/login", user, {
        headers: {
          "Content-Type": "application/json",
          Accept: "applicatioon/json",
        },
      })
      .then((res) => {
        alert("LOGIN SUCCESSFUL");
        setLoading(false);
        navigate("/");
        localStorage.setItem("user", JSON.stringify(res.data));
      })
      .catch((err) => {
        alert("INCORRECT CREDENTIALS");
        setLoading(false);
      });
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="" />
        <label htmlFor="">USERNAME</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
        <label htmlFor="">PASSWORD</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <button
          disabled={loading}
          style={{ background: loading ? "rgba(21, 95,	200, 0.8)" : "#155fc8" }}
        >
          {loading ? "LOADING" : "LOGIN"}
        </button>
      </form>
    </div>
  );
};

export default Login;
