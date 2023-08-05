import React from "react";
import "../css/Form.css";
import logo from "../images/logo.png";
import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="form-container">
        <form>
          <img src={logo} alt="" />
          <label htmlFor="">USERNAME</label>
          <input type="text" name="" id="" placeholder="Enter your username" />
          <label htmlFor="">PASSWORD</label>
          <input
            type="password"
            name=""
            id=""
            placeholder="Enter your password"
          />
        </form>
      </div>
    </>
  );
};

export default Login;
