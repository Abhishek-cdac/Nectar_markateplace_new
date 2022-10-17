import React from "react";
import dummyData from "../containers/Dummydata";

function HostingServices() {
  return (
    <>
      <div className="container">
        <div className="hostingservices">
          <div className="row">
            <h6>Nectar Hosting Services</h6>
            {dummyData?.hostingCardData?.map((items) => (
              <div className="col-lg-3" style={{margin:"2em"}}>
                <div class="card text-center" style={{ borderRadius: "none" }}>
                  <div class="card-body">
                    <img
                      style={{ width: "50%", height: "125px" }}
                      src={items.image}
                      alt=""
                    />
                    <hr />
                    <h5 class="hostingtitle">{items.title}</h5>
                    <h6 class="card-text" style={{ color: "#f16728" }}>
                      {items.discount}{" "}
                      <span style={{ color: "black" }}>{items.price}</span>
                    </h6>
                    <h6 class="card-text">
                      M.R.P.:{" "}
                      <span style={{ color: "#f16728" }}>{items.mrp}</span>
                    </h6>
                    <h6 class="card-text">{items.taxes}</h6>
                    <hr />
                    <button
                      href="#"
                      class="btn btn-primary"
                      style={{ width: "100%", border: "none" }}
                    >
                      Explore All Benefits
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HostingServices;
