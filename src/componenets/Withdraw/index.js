import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./../../widgets/Header";
import Sidebar from "./../../widgets/Sidebar";
import Footer from "./../../widgets/Fotter";
import { deleteWithdrawData,getwithdraw } from './../../services/withdraw'
function Withdraw(props) {
    const [userList, setUsetList] = useState([]);
    const [id,setId]=useState("");
    //
    useEffect(() => {
         customerData("pending");
    }, []);

    const customerData = async(status) => {
        let requestData={
            "status":status
        }
        var resp =await getwithdraw(requestData);
        console.log("resp",resp)
       if (resp.status == "200") {
            setUsetList(resp.data)
        } else {
            setUsetList([])
        }
    };
    const delete_card = async(id)=>{
        let request ={
            "id": id
        }
        console.log("request===",request)
        let resp = await deleteWithdrawData(request);
        console.log("response==",resp)
        customerData("pending");
    }

    return (
        <section id="container" >
            {/* <Header /> */}
            <Sidebar  active={"withdraw"} />

            <section id="main-content">
                <section class="wrapper">
                    <h3><i class="fa fa-angle-right"></i> Responsive Table Examples</h3>
                    <select class="form-control" onChange={(e)=>{customerData(e.target.value)}}> 
                        <option value="pending">pending</option>
                        <option value="complete">Complete</option> 
                        <option value="Cancelled">Cancelled</option> 

                    </select>
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
                                                <th >Amount</th>
                                                <th >Total Amount</th>
                                                <th >commission</th>
                                                <th >status</th>
                                                <th>name</th>
                                                <th>email</th>
                                                <th>phone</th> 
                                                <th>Bank</th>
                                                <th>Date</th> 
                                                <th >Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {userList.map((item,index)=>
                                            <tr class={item.status == "pending" && "btn-info" || item.status == "Cancelled" &&  "btn-danger"  || item.status == "complete" &&  "btn-success"}>
                                                <td>{index+1}</td>
                                                <td>{item.withdrawId}</td>
                                                <td >{item.amount   }</td>
                                                <td>{item.totalAmount}</td>
                                                <td class="numeric">{item.commission}</td>
                                                <td>{item.status}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td> 
                                                <td> 
                                                   Bank Name:{item.bankName}<br/>
                                                   AC. no:{item.accountNumber}<br/>
                                                   Branch:{item.branch}<br/>
                                                   Holder Name:{item.accountHolderName}<br/>
                                                   Ifsc:{item.ifsc}<br/>
                                                   Account Type:{item.accountType}<br/>
                                                </td>
                                                <td>{item.createdAt}</td>
                                                <td>
                                                {item.status == "pending" &&  <>
                                                    <button class="btn btn-success" ><i class="fa fa-money" aria-hidden="true"></i></button> <span></span>
                                                    <button class="btn btn-danger"  data-toggle="modal" data-target="#deleteModal" onClick={()=>{setId(item.withdrawId)}}><i class="fa fa-trash-o"></i></button>
                                                   </> }
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



<div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="deleteModalLabel">Are you want delete ?</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body"> 
      <p>Do you want to delete ?</p>        
      <div class="modal-footer">
        <button type="button" class="btn btn-success" data-dismiss="modal" onClick={()=>{delete_card(id)}}>Yes</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal" >No</button>
      </div>
    </div>
  </div>
  </div>
</div>

            <Footer />
        </section>
    );
}
export default Withdraw;
