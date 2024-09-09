import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./../../widgets/Header";
import Sidebar from "./../../widgets/Sidebar";
import Footer from "./../../widgets/Fotter";
import { getUsersList } from './../../services/user'
function UsersList(props) {
    const [userList, setUsetList] = useState([]);
    //
    useEffect(() => {
         customerData();
    }, []);

    const customerData = async() => {
        var resp =await getUsersList();
        console.log("resp",resp)
       if (resp.status == "200") {
            setUsetList(resp.data)
        } else {
            setUsetList([])
        }
    };

    return (
        <section id="container" >
            {/* <Header /> */}
            <Sidebar  active={"users"} />

            <section id="main-content">
                <section class="wrapper">
                    <h3><i class="fa fa-angle-right"></i> Responsive Table Examples</h3>
                    <div class="row mt">
                        <div class="col-lg-12">
                            <div class="content-panel">
                                <h4><i class="fa fa-angle-right"></i> Responsive Table</h4>
                                <section id="unseen">
                                    <table class="table table-bordered table-striped table-condensed">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Id</th>
                                                <th >Name</th>
                                                <th >Email</th>
                                                <th >Phone</th>
                                                <th >Wallet</th>
                                                <th >Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {userList.map((item,index)=>
                                            <tr>
                                                <td>{index+1}</td>
                                                <td>{item.userId}</td>
                                                <td >{item.name}</td>
                                                <td>{item.email}</td>
                                                <td class="numeric">{item.phone}</td>
                                                <td>{item.wallet}</td>
                                                <td>
                                                    <button class="btn btn-danger" ><i class="fa fa-trash-o"></i></button>
                                                </td>
                                            </tr>
                                        )}
                                            

                                        </tbody>
                                    </table>
                                </section>
                            </div>
                        </div>
                    </div>


                </section>
            </section>
            <Footer />
        </section>
    );
}
export default UsersList;
