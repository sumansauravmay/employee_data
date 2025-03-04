import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="topnav">
      <Link to="/">
        <p className="active">All Employee</p>
      </Link>

      <Link to="/newemployee">
        <p>Add</p>
      </Link>
    </div>
  );
};

export default Navbar;
