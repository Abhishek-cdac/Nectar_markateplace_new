import React from "react";
import Notification from "../Notification";

import { useNavigate } from "react-router-dom";

function Header2() {
  const navigate = useNavigate();
  return (
    <div className="top_header">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <img className="header_logo" src="/assets/images/Multilogo.jpg" />
            </li>
            <li style={{ paddingTop: "5px" }}>
              <div
                style={{
                  borderRight: "2px solid",
                  height: "30px",
                  opacity: "0.5",
                  marginRight: "10px",
                  // marginLeft: "10px",
                }}
              ></div>
            </li>
            <li class="nav-item MarketplaceLogoHead">
              <a class="navbar-brand " href="/">
                Market Place
              </a>
            </li>
          </ul>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav header-right-ul">
              <div className="searchtop">
                <div className="input-group" style={{ paddingTop: "7px" }}>
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search Here..."
                    name="search"
                    id="search"
                  />
                  <button type="submit" className="input-group-text">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </button>
                </div>
              </div>

              <li class="nav-item">
                <a class="nav-link header_icon notification-modal" href="#">
                  <i
                    class="fa fa-bell-o"
                    aria-hidden="true"
                    // onClick={() => navigate("/notification")}
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  ></i>
                
                  <Notification/>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link header_icon_user" href="#">
                  <div class="btn-group logout-dropdown">
                    <i
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      class="fa fa-user-circle"
                    ></i>
                    <ul class="dropdown-menu  ">
                      <li>
                        <button className="logout-btn">Log out</button>
                      </li>
                    </ul>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header2;
