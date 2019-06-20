import React, { Component } from "react";

//Stateless Functional Component
const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="" className="navbar-brand">
        Shopping Cart
        <span className="badge badge-pill badge-secondary ml-2">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
