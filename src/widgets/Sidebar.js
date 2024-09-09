import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import jwt_decode from "jwt-decode"; 
// import { login } from "../services/user";

function Sidebar(props) {
useEffect(()=>{
    if (localStorage.getItem('userId') != null) {
    } else {
      window.location.href = "/";
    }
    // alert(localStorage.getItem('userId'))
},[])
const {active} =props;
    const go_to_next=(event)=>{
      //  setActive(event)
     if(event == "users"){
        window.location.href = "/userList";
     }
     else if(event == "cards"){
        window.location.href = "/cards";
     }
     else if(event == "buyers"){
        window.location.href = "/buyers";
     }
     else if(event == "withdraw"){
        window.location.href = "/withdraw";
     }
    else if(event == "payment"){
        window.location.href = "/payment";
     }
     else{
        window.location.href = "/dashboard";
     }
    }

    const logout = (e) => {
        e.preventDefault()
        localStorage.clear();
        window.location = "/";
      };
    return (
        <aside>
            <div id="sidebar" class="nav-collapse ">
                {/* sidebar menu start*/}
                <ul class="sidebar-menu" id="nav-accordion">

                    <p class="centered"><a href="profile.html"><img src="assets/img/ui-sam.jpg" class="img-circle" width="60" /></a></p>
                    <h5 class="centered">Admin </h5>

                    <li class="sub-menu">
                        <a class={active == "dashboard" && "active"} onClick={()=>{go_to_next("/")}}>
                            <i class="fa fa-dashboard"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>

                    <li class="sub-menu">
                        <a class={active == "users" && "active"}  onClick={()=>{go_to_next("users")}} >
                            <i class="fa fa-desktop"></i>
                            <span>Users</span>
                        </a> 
                    </li>
                    <li class="sub-menu">
                        <a  class={active == "cards" && "active"}  onClick={()=>{go_to_next("cards")}} >
                            <i class="fa fa-desktop"></i>
                            <span>Cards</span>
                        </a> 
                    </li>
                    <li class="sub-menu">
                        <a class={active == "buyers" && "active"}   onClick={()=>{go_to_next("buyers")}} >
                            <i class="fa fa-desktop"></i>
                            <span>Buyers</span>
                        </a> 
                    </li>
                    <li class="sub-menu">
                        <a class={active == "withdraw" && "active"} onClick={()=>{go_to_next("withdraw")}} >
                            <i class="fa fa-desktop"></i>
                            <span>Withdraw</span>
                        </a> 
                    </li>
                    <li  class="sub-menu">
                        <a  class={active == "payment" && "active"}  onClick={()=>{go_to_next("payment")}} >
                            <i class="fa fa-desktop"></i>
                            <span>Payment</span>
                        </a> 
                    </li>
                    <li  class="mt">
                    <button type="button" onClick={logout} class="btn btn-danger navbar-right mb-5" data-toggle="modal" data-target="#deleteModal">Logout</button>
                    </li>
                </ul>
                {/* sidebar menu end*/}
                {/* <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="deleteModalLabel">Are you want Logout ?</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body"> 
      <p>Do you want to Logout ?</p>        
      <div class="modal-footer">
        <button type="button" class="btn btn-success" data-dismiss="modal" onClick={logout}>Yes</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal" >No</button>
      </div>
    </div>
  </div>
  </div>
</div> */}
            </div>
        </aside>
    );
}
export default Sidebar;
