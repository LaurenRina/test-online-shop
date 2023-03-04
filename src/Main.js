import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import List from "./List";
import Product from "./Product";
import Bag from "./Bag";
import Profile from "./Profile";
import Authorization from "./Authorization";
import "./styles/App.css";

function Main() {
  return (
    <>
      <div className="App">
        <div className="container-fluid">
          <Router>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/list" element={<List />} />
              <Route path="/product" element={<Product />} />
              <Route path="/bag" element={<Bag />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/authorization" element={<Authorization />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default Main;
