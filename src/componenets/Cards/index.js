import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./../../widgets/Header";
import Sidebar from "./../../widgets/Sidebar";
import Footer from "./../../widgets/Fotter";
import { getCardsList,addCardData,deleteCardData } from './../../services/card'
function Cards(props) {
    const [cardsList, setCardsList] = useState([]);
    const [price, setPrice] = useState("");
    const [percentage, setPercentage] = useState("");
    const [applyLimit, setApplyLimit] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const [category, setCategory] = useState("");
    const [id,setId]=useState("");
    const PERCENTAGES = [...new Array(101)];
   
    useEffect(() => {
         cardsdata();
    }, []);

    const cardsdata = async() => {
        var resp =await getCardsList();
        console.log("resp",resp)
       if (resp.status == "200") {
              setCardsList(resp.data)
         } else {
            setCardsList([])
        }
    };

    const add_card = async()=>{
        let request ={
            "price": price,
            "percentage":percentage,
            "applyLimit":applyLimit,
            "description": description,
            "category": category, 
            "status": status
        }
        console.log("request===",request)
        let resp = await addCardData(request);
        console.log("response==",resp)
    }
    const delete_card = async(id)=>{
        let request ={
            "id": id
        }
        console.log("request===",request)
        let resp = await deleteCardData(request);
        console.log("response==",resp)
        cardsdata()
    }

    return (
        <section id="container" >
            {/* <Header /> */}
            <Sidebar  active={"cards"}/>

            <section id="main-content">
                <section class="wrapper">
                    <h3><i class="fa fa-angle-right"></i>Cards</h3>
                    <div class="row mt" >
                        <div class="col-lg-12">

                    <button type="button" class="btn btn-primary navbar-right mb-5" data-toggle="modal" data-target="#exampleModal">Add Card </button>
                    </div>
                    </div>
                    <div class="row mt" >
                        <div class="col-lg-12">
                            <div class="content-panel">
                                <h4><i class="fa fa-angle-right"></i>Cards Table</h4>
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
                                                <th >Action</th>
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
                                                <td>
                                                    <button class="btn btn-danger"  data-toggle="modal" data-target="#deleteModal" onClick={()=>{setId(item.cardId)}}><i class="fa fa-trash-o"></i></button>
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

      
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Card</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form class="form-login" action="index.html"> 
          <div class="login-wrap">
              <label>Price *</label>
              <input type="number" class="form-control" placeholder="Price" onChange={(e)=>{setPrice(e.target.value)}} autofocus />
              <br/>
              <label>Apply Limit *</label>
              <select class="form-control" onChange={(e)=>{setApplyLimit(e.target.value)}}>
               {PERCENTAGES.map((each, index) => (
                <option value={index}>{index}</option>
               ))}
               </select> 
              <br/>
              <label>Percentages *</label>
              <select class="form-control" onChange={(e)=>{setPercentage(e.target.value)}}>
               {PERCENTAGES.map((each, index) => (
                <option value={index}>{index}</option>
               ))}
               </select> 
              <br/>
              <label>Description</label>
              <input type="text" class="form-control" placeholder="Description" onChange={(e)=>{setDescription(e.target.value)}}/>
              <br/>
              <label>Category</label>
              <select class="form-control" onChange={(e)=>{setCategory(e.target.value)}}>
                <option value="1">bronze</option>
                <option value="2">silver</option>
                <option value="3">gold</option>
                <option value="4">platinum</option>
              </select>
              <br/>
              <label>Status</label>
              <select class="form-control" onChange={(e)=>{setStatus(e.target.value)}}>
                 <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Deactive">Deactive</option> 
              </select>
              <br/><br/>
              <button class="btn btn-theme btn-block" type="button"  onClick={add_card}><i class="fa fa-lock"></i> SUBMIT</button>
              {/* <hr/>  */}
          </div> 
      </form>	  
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        {/* <b  utton type="button" class="btn btn-primary">Save changes</b> */}
      </div>
    </div>
  </div>
</div>



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
export default Cards;
