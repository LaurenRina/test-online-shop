import React from "react";
import { Link } from "react-router-dom";
import "../styles/Product.css";

export default function Product() {
  return (
    <>
      <div id="list">
        <Link to="/list" className="link">
          Back
        </Link>
      </div>
    </>
  );
}
