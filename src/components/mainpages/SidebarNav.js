import React from "react";
import { Link } from "react-router-dom";

const SidebarNav = () => {
  return (
    <nav
      className="col-md-2 d-none d-md-block bg-secondary p-0"
      style={{ height: "100vh" }}
    >
      <div className="position-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link active text-dark" to={"/"}>
              Dashboard
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to={"/home"}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/about"}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/contact"}>
              Contact
            </Link>
          </li> */}
          <div
            class="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <Link
              class="nav-link"
              id="v-pills-home-tab"
              data-toggle="pill"
              to={"/home"}
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              Home
            </Link>
            <Link
              class="nav-link"
              id="v-pills-profile-tab"
              data-toggle="pill"
              to={"/about"}
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              About
            </Link>
            <Link
              class="nav-link"
              id="v-pills-messages-tab"
              data-toggle="pill"
              to={"/contact"}
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >
              Contact
            </Link>
            
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default SidebarNav;
