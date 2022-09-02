import React from "react";

function Header() {
  return (
    <div className="top_header">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <div className="Logo">
            <img className="header_logo" src="assets/images/60-X-60.png" />
            <div className="verticalLine_header"
              style={{
                borderRight: "1px solid black",
                height: "25px",
                marginRight: "5%",
                marginTop:"5%",
                marginLeft: "5%",
              }}
            ></div>
            <a class="navbar-brand" href="#">
              Market Place
            </a>
          </div>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link become_partner" aria-current="page" href="/becomeApartner">
                  Become a Partner/Reseller
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login" >
                  Log In
                </a>
              </li>
              <li class="nav-item nav_register">
                <button class="btn-register" href="#">
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
