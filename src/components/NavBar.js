import React from "react";
import { FaMusic } from "react-icons/fa";

const NavBar = ({ toggleSideBarHandler }) => {
  return (
    <nav className="nav">
      <h1>React Music</h1>
      <button onClick={toggleSideBarHandler}>
        Library <FaMusic />
      </button>
    </nav>
  );
};

export default NavBar;
