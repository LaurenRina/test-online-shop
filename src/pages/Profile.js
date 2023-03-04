import React from "react";
import { Link } from "react-router-dom";
import "../styles/Profile.css";

export default function Profile() {
  return (
    <>
      <div id="profile">
        <Link to="/" className="link">
          Back
        </Link>
      </div>
    </>
  );
}
