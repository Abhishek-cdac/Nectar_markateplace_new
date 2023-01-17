import React from "react";

function Ndatu({
  title,
  subtext1,
  buttontext2,
  buttontext,
  heading,
  item1,
  item2,
  item3,
}) {
  return (
    <section className="backgroundimage-nDatu">
      <div className="container pt-5">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 pt-5">
            <h2 className="text-white">{title}</h2>
            <div style={{fontSize:"13px"}}>
              <p className="text-white">{subtext1}</p>
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
          </div>
          <div
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 my-5 "
            style={{ justifyContent: "right" }}
          >
            <h2 className="text-white d-flex justify-content-end">{heading}</h2>
            <div className="button-crm">
              <button
                className="btn btn-lg text-white m-2 button-buy"
                style={{ borderRadius: "2px", background: "#F16728" }}
              >
                {buttontext}
              </button>
              <button
                className="btn btn-lg text-white m-2 button-free"
                style={{ borderRadius: "2px", background: "#F16728" }}
              >
                {buttontext2}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ndatu;
