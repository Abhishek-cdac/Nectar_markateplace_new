import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="top_header loginheader" >
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid" >
          <div className="Logo">
            <img className="header_logo" src="assets/images/60-X-60.png" />
            <div
              className="verticalLine_header"
              style={{
                borderRight: "2px solid #817c7c",
                height: "35px",
                marginRight: "5%",
                marginTop: "2%",
                marginLeft: "5%",
              
              }}
            ></div>
            <a class="navbar-brand" href="/">
              <h5 style={{  color: "#474747" }}>
                {" "}
                Marketplace
              </h5>
            </a>
          </div>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link become_partner"
                  aria-current="page"
                  href="/partner/becomeApartner"
                  style={{fontSize:"13px"}}
                >
                  Become a Partner/Reseller
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login">
                  <p style={{   color: "#474747",marginLeft:"-68px", fontSize:"13px"}}>
                    Log In
                  </p>
                </a>
              </li>
              <li class="nav-item nav_register">
                <button
                  class="btn-register  "
                  href="/register"
                  onClick={() => navigate("/register")}
                >
                  Register
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
