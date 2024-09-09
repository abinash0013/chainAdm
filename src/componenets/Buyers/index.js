import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./../../widgets/Header";
import Sidebar from "./../../widgets/Sidebar";
import Footer from "./../../widgets/Fotter";
import { getBuyerList } from '../../services/buyer.js'
function Buyers(props) {
    const [cardsList, setCardsList] = useState([]);
    
    useEffect(() => {
         cardsdata();
    }, []);

    const cardsdata = async() => {
        var resp =await getBuyerList();
        console.log("resp",resp)
       if (resp.status == "200") {
              setCardsList(resp.data)
         } else {
            setCardsList([])
        }
    };

    
    return (
        <section id="container" >
            {/* <Header /> */}
            <Sidebar active={"buyers"} />

            <section id="main-content">
                <section class="wrapper">
                    <h3><i class="fa fa-angle-right"></i>Buyers</h3>
                    <div class="row mt" >
                        <div class="col-lg-12">

                    {/* <button type="button" class="btn btn-primary navbar-right mb-5" data-toggle="modal" data-target="#exampleModal">Add Card </button> */}
                    </div>
                    </div>
                    <div class="row mt" >
                        <div class="col-lg-12">
                            <div class="content-panel">
                                <h4><i class="fa fa-angle-right"></i>Buyers Table</h4>
                                <section id="unseen">
                                    <table class="table table-bordered table-striped table-condensed">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Id</th>
                                                <th >Price</th>
                                                <th >Percentage</th>
                                                <th >Apply Limit</th>
                                                <th >Category</th>
                                                <th>Coupon Code  </th>
                                                <th>Referal Coupon Code</th>
                                                <th>name</th>
                                                <th>email</th>
                                                <th>phone</th> 
                                                {/* <th >Action</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {cardsList.map((item,index)=>
                                            <tr>
                                                <td>{index+1}</td>
                                                <td>{item.cardId}</td>
                                                <td >{item.price}</td>
                                                <td>{item.percentage}</td>
                                                <td class="numeric">{item.applyLimit}</td>
                                                <td>{item.category}</td>
                                                <td>{item.couponCode}</td>
                                                <td>{item.referal_coupon_code}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                                {/* <td>
                                                    <button class="btn btn-danger"  data-toggle="modal" data-target="#deleteModal"  ><i class="fa fa-trash-o"></i></button>
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
export default Buyers;
