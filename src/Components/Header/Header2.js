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
                  <i
                    class="fa fa-bell-o"
                    aria-hidden="true"
                    // onClick={() => navigate("/notification")}
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  ></i>
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12 col-md-6 col-lg-8">
                        {/* <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Notification
            </button> */}
                        <div
                          className="modal fade"
                          id="staticBackdrop"
                          data-bs-backdrop="static"
                          data-bs-keyboard="false"
                          tabindex="-1"
                          aria-labelledby="staticBackdropLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5
                                  className="modal-title "
                                  id="staticBackdropLabel"
                                  style={{ marginLeft: "150px" }}
                                >
                                  Notification
                                </h5>
                                <p style={{ color: "#08668F" }}>clear</p>
                              </div>
                              <div className="modal-body">
                                <img
                                  className="Notification_icon"
                                  src="/assets/images/notification-icon.png"
                                  alt="..."
                                />
                                <p className="notification_user">
                                  Jack jane wanted to connect with <br></br>you
                                  as a new leads from XYZ Company.
                                </p>
                                <p className="notification_day">Today</p>
                                <p className="notification_time">
                                  1 minutes ago
                                </p>
                              </div>
                              <hr></hr>
                              <div className="modal-body">
                                <img
                                  className="Notification_icon"
                                  src="/assets/images/notification-icon.png"
                                  alt="..."
                                />
                                <p className="notification_user">
                                  Jack jane wanted to connect with <br></br>you
                                  as a new leads from XYZ Company.
                                </p>
                                <p className="notification_day">
                                  10 Oct 2021<br></br> 04:00 PM
                                </p>
                                <p className="notification_time">
                                  1 minutes ago
                                </p>
                              </div>
                              <hr></hr>
                              <div className="modal-body">
                                <img
                                  className="Notification_icon"
                                  src="/assets/images/notification-icon.png"
                                  alt="..."
                                />
                                <p className="notification_user">
                                  Jack jane wanted to connect with <br></br>you
                                  as a new leads from XYZ Company.
                                </p>
                                <p className="notification_day">
                                  10 Oct 2021<br></br> 04:00 PM
                                </p>
                                <p className="notification_time">
                                  1 minutes ago
                                </p>
                              </div>
                              <hr></hr>
                              <div className="modal-body">
                                <img
                                  className="Notification_icon"
                                  src="/assets/images/notification-icon.png"
                                  alt="..."
                                />
                                <p className="notification_user">
                                  Jack jane wanted to connect with <br></br>you
                                  as a new leads from XYZ Company.
                                </p>
                                <p className="notification_day">Today</p>
                                <p className="notification_time">
                                  1 minutes ago
                                </p>
                              </div>
                              <div className="modal-footer">
                                <p
                                  data-bs-dismiss="modal"
                                  style={{
                                    color: "#08668F",
                                    marginRight: "50%",
                                  }}
                                >
                                  View All
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link header_icon" href="#">
                  <i class="fa fa-shopping-cart" aria-hidden="true"></i>
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
