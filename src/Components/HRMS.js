import React from "react";
import Form from "./Form";
import "./HRSM.css";

function HRMS() {
  return (
    <>
      <div className="row pt-5" >
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
          <h2 className="text-center">Explore Our Top Features</h2>
          <h6 className="text-center pt-2 ">
            Nectar HRMS offers HR resource modules with exceptional features and
            an intuitive interface. It's easy to set up, configure and use.
          </h6>
          <img className="img-fluid mt-5 pt-5" src="\assets\images\Group 3011.png" />
          <div className="title">
            <div className="textheading"></div>
            <p>Core HR</p>
            <p>Performance Appraisal</p>
            <p>Payroll</p>
            <p>Employee Self-Service</p>
            <p>Talent Aquisition</p>
            <p>Reports & Analytics</p>
            <p>Dashboard</p>
          </div>
        </div>
      </div>
      <br /><br />
      <br /><br />
      <Form />
     
    </>
  );
}

export default HRMS;
