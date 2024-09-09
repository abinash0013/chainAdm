import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./../../widgets/Header";
import Sidebar from "./../../widgets/Sidebar";
import Footer from "./../../widgets/Fotter";
import { getpayment} from './../../services/payment'
function Payment(props) {
    const [userList, setUsetList] = useState([]);
    const [id,setId]=useState("");
    //
    useEffect(() => {
         customerData();
    }, []);

    const customerData = async(status) => {
        
        var resp =await getpayment();
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
            <Sidebar  active={"payment"}/>

            <section id="main-content">
                <section class="wrapper">
                    
                    <div class="row mt">
                        <div class="col-lg-12">
                            <div class="content-panel">
                                <h4><i class="fa fa-angle-right"></i>Payment Table</h4>
                                <section id="unseen">
                                    <table class="table table-bordered table-striped table-condensed">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Id</th>
                                                <th >Price</th>
                                                <th >type</th> 
                                                <th >status</th>
                                                <th>name</th>
                                                <th>email</th>
                                                <th>phone</th> 
                                                <th>Date</th> 
                                                {/* <th >Action</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {userList.map((item,index)=>
                                            <tr class={item.status == "pending" && "btn-info" || item.status == "Cancelled" &&  "btn-danger"  || item.status == "complete" &&  "btn-success"}>
                                                <td>{index+1}</td>
                                                <td>{item.id}</td>
                                                <td >{item.price   }</td>
                                                <td>{item.type}</td> 
                                                <td>{item.status}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.createdAt}</td>
                                                {/* <td>
                                                {item.status == "pending" &&  <>
                                                    <button class="btn btn-success" ><i class="fa fa-money" aria-hidden="true"></i></button> <span></span>
                                                    <button class="btn btn-danger"  data-toggle="modal" data-target="#deleteModal" onClick={()=>{setId(item.withdrawId)}}><i class="fa fa-trash-o"></i></button>
                                                   </> }
                                                </td> */}
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
export default Payment;
