import React from "react";

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
                <a class="nav-link header_icon" href="#">
                  <i class="fa fa-bell-o" aria-hidden="true" 
                  onClick={()=> navigate ("/notification")}
                  
                  ></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link header_icon" href="#">
                  <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link header_icon_user" href="#">
                  <i class="fa fa-user-circle" aria-hidden="true"></i>
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
