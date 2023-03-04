import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import List from "./pages/List";
import Product from "./pages/Product";
import Bag from "./pages/Bag";
import Profile from "./pages/Profile";
import Authorization from "./pages/Authorization";
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
