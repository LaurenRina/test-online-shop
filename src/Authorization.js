import React from "react";
import { Link } from "react-router-dom";
import "./styles/Authorization.css";

export default function Authorization() {
  return (
    <>
      <div id="authorization">
        <Link to="/" className="link">
          Back
        </Link>
      </div>
    </>
  );
}
