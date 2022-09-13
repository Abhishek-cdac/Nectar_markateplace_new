import React, { useState } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import Header2 from "./Header/Header2";
import Footer from "./Footer";

const Tabs = Object.freeze([
  { label: "Dashboard", link: "reseller", icon: "fa fa-user" },
  { label: "Telecom", link: "#", icon: "fa fa-gear" },
  { label: "Become partner", link: "#", icon: "fa fa-user" },
  { label: "Resources", link: "#", icon: "fa fa-gear" },
  { label: "Profile", link: "#", icon: "fa fa-user" },
  { label: "Settings", link: "#", icon: "fa fa-gear" },
]);

function SideNav() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [Active, setIsActive] = useState("");

  const location = useLocation();
  const handleClick = (value) => {
    console.log("click");
    setToggle(!toggle);
  };
  const handleLink = (link) => {
    setIsActive(!Active);
    navigate(`/${link}`);
  };

  return (
    <>
    <Header2/>
    <div
      className={
        toggle == true
          ? "sb-nav-fixed bg-light sb-sidenav-toggled"
          : "sb-nav-fixed bg-light"
      }
    >
      <div id="layoutSidenav">
        <div
          id={
            toggle == true ? "layoutSidenav_nav-toggled" : "layoutSidenav_nav"
          }
        >
          <nav className="sb-sidenav  sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
              <div style={{ justifyContent: "center", display: "flex " }}>
                <button
                  style={{ color: "#fff" }}
                  className="btn btn-link btn-lg order-1 order-lg-0"
                  id="sidebarToggle"
                  onClick={() => {
                    handleClick();
                  }}
                >
                  <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
                </button>
              </div>
              <div className="nav mt-4">
                {Tabs.map(({ label, link, icon }) => {
                  const isActive = location.pathname.split("/")[1] === link;
                  return (
                    <>
                      <a
                        className={`nav-link ${isActive ? "active" : ""}`}
                        key={link}
                        onClick={() => navigate(`/${link}`)}
                      >
                        <i
                          className={
                            toggle == true
                              ? `icon-toggled ${icon}`
                              : `icon ${icon}`
                          }
                          onClick={handleClick}
                        />
                        <span>
                          <p
                            className={
                              toggle == true ? "Nav-label-toggled" : "Nav-label"
                            }
                          >
                            {label}
                          </p>{" "}
                        </span>
                      </a>
                    </>
                  );
                })}
              </div>
            </div>
          </nav>
        </div>
        <div id={ toggle == true ? "layoutSidenav_content_toggled" : "layoutSidenav"}>
          <div className="container-fluid">{<Outlet/>}</div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default SideNav;
