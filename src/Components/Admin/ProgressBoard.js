import React from "react";
import "./ProgressBoard.css";
import { useNavigate } from "react-router-dom";

import dummyData from "../../containers/Dummydata";

function ProgressBoard() {
  const navigate = useNavigate();
  return (
    <div class="container progresboard">
      <div class="row ">
        <h5>Complaint Management/ Progress Board</h5>
        <div class="col-md-4 col-lg-4 col-xl-4  border-right">
          <div className="pending  text-white text-center">Pending</div>
          {dummyData &&
            dummyData.ComplaintManagement.map((data) => (
              <div className="pending-card mt-3 mx-5">
                <div class="card w-80"   onClick={()=>navigate("/openmodal")}>
                  <div class="card-body ">
                    <p class="card-title mx-3">{data.cardtitle}</p>
                    <div className="pending-card-icon text-end">
                      <i class="fa fa-eye " aria-hidden="true"></i>
                    </div>

                    <p class="card-text mx-5">{data.cardbody}</p>

                    <p className="pending-data-time">{data.cardfooter}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div class="col-md-4 col-lg-4  col-xl-4  mb-5 borders">
          <div className="inprogress text-center text-white">In Progress</div>
          {dummyData &&
            dummyData.ComplaintManagementinprogress.map((data) => (
              <div className="pending-card mt-3 mx-5">
                <div class="card w-80">
                  <div class="card-body ">
                    <p class="card-title">{data.cardtitle}</p>
                    <div className="pending-card-icon text-end">
                      <i class="fa fa-eye " aria-hidden="true"></i>
                    </div>
                    <div>
                      <hr style={{ width: "100%" }}></hr>
                    </div>

                    <p class="card-text text-center mx-5">{data.cardbody}</p>
                    <div>
                      <hr style={{ width: "100%" }}></hr>
                    </div>
                    <div className="text-start mx-1">
                      <i class="fa fa-comments-o" aria-hidden="true"></i>
                      <span>
                        {" "}
                        <p className="inprogressbody">{data.carddata}</p>
                      </span>
                    </div>

                    <p className="pending-data-time">{data.cardfooter}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div class="col-md-4 col-lg-4  col-xl-4 mv-5">
          <div className="done text-center text-white ">Done</div>
          {dummyData &&
            dummyData.ComplaintManagementdone.map((data) => (
              <div className="pending-card mt-3 mx-5">
                <div class="card w-80">
                  <div class="card-body ">
                    <p class="card-title mx-3">{data.cardtitle}</p>
                    <div className="pending-card-icon text-end">
                      <i class="fa fa-eye " aria-hidden="true"></i>
                    </div>
                    <div>
                      <hr style={{ width: "100%" }}></hr>
                    </div>

                    <p
                      class="card-text text-center"
                      style={{ color: "#119A28" }}
                    >
                      {data.cardbody}
                    </p>

                    <p className="pending-data-time">{data.cardfooter}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProgressBoard;
