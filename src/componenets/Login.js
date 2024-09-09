import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import jwt_decode from "jwt-decode"; 
import { login } from "../services/user";

function Login(props) {
  // if (!localStorage.getItem('token')) {
  // } else {
  //   window.location.href = "/dashboard";
  // }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const go_to_dashboard = async () => {
    localStorage.setItem("userId", "1");
      window.location.href = "/dashboard";
    // let requestData = {
    //   // "email": email,
    //   // "password": password
    //   "email": "Admin@gmail.com",
    //   "password": "123456"
    // }
    // let resp = await login(requestData)
    // if (resp.status == "200") {
    //   localStorage.setItem("userId", "1");
    //   window.location.href = "/dashboard";
    // } else {
    //   alert("Wrong username / password")
    // }
  };


  return (
    <div id="login-page">
      <div class="container">
        <form class="form-login" action="index.html">
          <h2 class="form-login-heading">Admin</h2>
          <div class="login-wrap">
            <input type="text" onChange={(e) => { setEmail(e.target.value) }} class="form-control" placeholder="User ID" autofocus />
            <br />
            <input type="password" class="form-control" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
            <br /><br />
            <button class="btn btn-theme btn-block" onClick={go_to_dashboard} type="button"><i class="fa fa-lock"></i> SIGN IN</button>
          </div>
        </form>
      </div>
    </div>

  );
}
export default Login;
