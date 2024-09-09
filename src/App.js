import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./componenets/Login";
import Dashboard from "./componenets/Dashboard";
import UsersList from "./componenets/Users/UsersList";
import Cards from "./componenets/Cards/index"
import Buyers from "./componenets/Buyers/index"
import Withdraw from "./componenets/Withdraw/index"
import Payment from "./componenets/Payment/index"
function App(props) {
  return (
    <Router>
      {/* <div className="app-container"> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userList" element={<UsersList />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/buyers" element={<Buyers />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/payment" element={<Payment />} />

      </Routes>
      {/* </div>   */}
    </Router>
  );
}
export default App;
