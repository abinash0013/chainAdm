import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import Header from "../widgets/Header";
import Sidebar from "../widgets/Sidebar";
import Footer from "../widgets/Fotter";
import { getUsersList } from './../services/user'
import { getwithdraw } from './../services/withdraw'
function Dashboard(props) { 
    const [userList, setUsetList] = useState([]);
    const [withdrawRequestList, setWithdrawRequestList] = useState([]);
    //
    useEffect(() => {
         customerData();
         withdrawRequest("pending")
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
 

   const withdrawRequest = async(status) => {
       let requestData={
           "status":status
       }
       var resp =await getwithdraw(requestData);
       console.log("resp",resp)
      if (resp.status == "200") {
        setWithdrawRequestList(resp.data)
       } else {
        setWithdrawRequestList([])
       }
   };

  return ( 
    <section id="container" >
    {/* <Header /> */}
    <Sidebar  active={"dashboard"}/>   
    
      <section id="main-content">
        <section class="wrapper">

            <div class="row">
                <div class="col-lg-9 main-chart">
                
                    <div class="row mtbox">
                        <div class="col-md-2 col-sm-2 col-md-offset-1 box0">
                            <div class="box1">
                                <span class="li_heart"></span>
                                <h3>{userList.length}</h3>
                            </div>
                                <p>People</p>
                        </div>
                        <div class="col-md-2 col-sm-2 box0">
                            <div class="box1">
                                <span class="li_cloud"></span>
                                <h3>{withdrawRequestList.length}</h3>
                            </div>
                                <p>Withdraw Request</p>
                        </div>
                        {/* <div class="col-md-2 col-sm-2 box0">
                            <div class="box1">
                                <span class="li_stack"></span>
                                <h3>23</h3>
                            </div>
                                <p>You have 23 unread messages in your inbox.</p>
                        </div>
                        <div class="col-md-2 col-sm-2 box0">
                            <div class="box1">
                                <span class="li_news"></span>
                                <h3>+10</h3>
                            </div>
                                <p>More than 10 news were added in your reader.</p>
                        </div>
                        <div class="col-md-2 col-sm-2 box0">
                            <div class="box1">
                                <span class="li_data"></span>
                                <h3>OK!</h3>
                            </div>
                                <p>Your server is working perfectly. Relax & enjoy.</p>
                        </div> */}
                    
                    </div>{/* /row mt */}	
                 
                </div>{/* /col-lg-9 END SECTION MIDDLE */}
                
                
        
               
            </div> 
        </section>
    </section> 
    <Footer />
</section>
  );
}
export default Dashboard;
