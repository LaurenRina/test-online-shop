import React from "react";
import { Link } from "react-router-dom";
import "./styles/Bag.css";

export default function Bag() {
  return (
    <>
      <div id="bag">
        <Link to="/list" className="link">
          Back to shopping
        </Link>
      </div>
    </>
  );
}
