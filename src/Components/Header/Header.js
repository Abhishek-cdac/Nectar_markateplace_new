import React from "react";

function Header() {
  return (
    <div className="top_header">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <img className="header_logo" src="assets/images/Multilogo.jpg" />
          <a class="navbar-brand" href="#">
            Market Place
          </a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link become_partner" aria-current="page" href="#">
                  Become a Partner/Reseller
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
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
