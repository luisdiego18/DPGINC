import React from "react";
import "../assets/styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img
        className="logo"
        src={require("../assets/images/DPG_Corp_Family_Logo_2.png")}
      />
    </div>
  );
};

export default Navbar;
