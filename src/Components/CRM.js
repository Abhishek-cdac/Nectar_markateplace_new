import React from "react";
import "./CRM.css";
function CRM({
  title,
  subtext1,
  buttontext2,
  buttontext,
  heading,
  item1,
  item2,
  item3,
  subtext2,
}) {
  return (
    <>
      <section className="backgroundimage-CRM pt-5">
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" style={{fontSize: "13px"}}>
              <h2 className="text-white">{title}</h2>
              <p className="text-white">{subtext1}</p>
              <p className="text-white">{subtext2}</p>
              <p className=" text-white ">
                {" "}
                <span className="fa-solid fa-check-double text-white mx-3 "></span>
                {item1}
              </p>
              <p className=" text-white ">
                {" "}
                <span className="fa-solid fa-check-double text-white mx-3"></span>
                {item2}
              </p>
              <p className="  text-white ">
                {" "}
                <span className="fa-solid fa-check-double text-white mx-3"></span>
                {item3}
              </p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-4">
              <h2 className="text-white d-flex justify-content-end">
                {heading}
              </h2>
              <div className="button-crm" style={{ marginLeft: "50px" }}>
                <button className="btn btn-lg text-white  button-buy">
                  {buttontext}
                </button>
                <button className="btn btn-lg text-white  m-2 button-free">
                  {buttontext2}
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CRM;
