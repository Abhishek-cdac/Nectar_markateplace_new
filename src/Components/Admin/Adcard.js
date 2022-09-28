import React from "react";

const Adcard = ({ NoOfProducts, image, footeritem, footerNo,className}) => {

  return (
    <div className={`Adcard ${className}`}>
      <div class="card-header AdCardHeader">
        <p>{NoOfProducts}</p>
        <img src={image}></img>
      </div>
      <div class="card-body">
        <h5 class="card-title">
          <div class="progress" style={{ height: "5px" }}>
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "25%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </h5>
        <div className="adcardfooter">
          <p class="card-text">{footeritem}</p>
          <p>{footerNo}</p>
        </div>
      </div>
    </div>
  );
};

export default Adcard;
