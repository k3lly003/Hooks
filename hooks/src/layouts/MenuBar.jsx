import React from "react";
import "../styles/MenuBar.css";
import { Link } from "react-router-dom";

function MenuBar() {
  return (
    <>
      <div className="menu">
        <Link to="/" className="text">
          <div>Practices</div>
        </Link>
        <Link to="" className="text">
          <div>About</div>
        </Link>
        <Link to="" className="text">
          <div>Feedback</div>
        </Link>
        <Link to="" className="text">
          <div>Follow us</div>
        </Link>
      </div>
    </>
  );
}

export default MenuBar;
