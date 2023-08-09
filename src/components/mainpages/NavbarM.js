import React from "react";
import SidebarNav from "./SidebarNav";
import { useNavigate, Link } from "react-router-dom";

const NavbarM = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <Link className="navbar-brand" to={"/"}>
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          
        </div>
        <div className="ml-auto">
          <button
            className="btn btn-outline-primary"
            onClick={() => navigate("/")}
          >
            Back Button
          </button>
        </div>
      </nav>
      {/* for side navbar */}
      <SidebarNav /> 
      
    </>
  );
};

export default NavbarM;
