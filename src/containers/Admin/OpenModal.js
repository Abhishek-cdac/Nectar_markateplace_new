import React from "react";
import "./OpenModal.css";
import { useNavigate } from "react-router-dom";

function OpenModal() {
  const navigate = useNavigate();
  return (
    <div>
      <div
        class="modal fade  open-modal "
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div
          class="modal-dialog modal-xl modal-dialog-centered open-modal"
          style={{ color: "#666666;" }}
        >
          <div class="modal-content open-modal">
            <div class="modal-header">
              <h1 class="modal-title fs-6 mx-2" id="exampleModalToggleLabel">
                Complaint Number:{" "}
                <span style={{ fontSize: "13px" }}>#254 |</span>Complaint Date:{" "}
                <span style={{ fontSize: "13px" }}>12/12/2021, 04:00 PM</span>
              </h1>
              <div className="logo-wipro-hrms">
                <img
                  className="wipro-logo"
                  src="assets/images/Wipro-logo.png"
                />
                <img
                  className="Nectarhrms-logo"
                  src="assets/images/Nectar HRMS.png"
                />
              </div>

              <button
                style={{ color: "#FB5606 " }}
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={()=>navigate("/progressboard")}
            
              >
                X
              </button>
            </div>
            <div class="modal-body open-modal mb-5">
              <div className="mx-4">
                Issue Commented: I am not able to access the HRMS log in
                section, once the employee are logged in and after that the
                issues are not
                <p className="issue-commented-text">
                  able to track the time sheet.
                </p>
              </div>

              <div className="mx-5">
                <div class="vtl">
                  <div class="event nectar">
                    <p class="date">Nectar Support:</p>
                    <p class="txt">
                      Thanks for raising the issue with nectar, we appreciate
                      the effort. Our technical team will look into your issues
                      and try to resolve it ASAP.
                    </p>
                  </div>
                  <div class="event user">
                    <p class="date">User:</p>
                    <p class="txt">Thanks For the support</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-modal">
              <div className="modal-footer open-modal">
                <br></br>
                <div class="col-md-4 mx-5">
                  <label
                    for="inputState"
                    style={{ fontSize: "12px" }}
                    class="form-label"
                  >
                    Pass the Complaint ticket:
                  </label>
                  <select
                    id="inputState development-team"
                    className="form-select"
                  >
                    <option selected>Development Team</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label
                    for="inputState"
                    class="form-label"
                    style={{ fontSize: "12px" }}
                  >
                    Set Assignee
                  </label>
                  <select id="inputState type-assignee" class="form-select ">
                    <option selected>
                      Type assignee Name here followed by @
                    </option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-md-3 mx-3">
                  <label
                    for="inputState"
                    class="form-label"
                    style={{ fontSize: "12px" }}
                  >
                    Set Priority
                  </label>
                  <select id="inputState high" class="form-select ">
                    <option selected>High</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-md-3 mx-5">
                  <label
                    for="inputState"
                    class="form-label"
                    style={{ fontSize: "12px" }}
                  >
                    Move Ticket
                  </label>
                  <select id="inputState move-ticket" class="form-select ">
                    <option selected>Move ticket to In Progress</option>
                    <option>...</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        class="btn btn-primary"
        data-bs-toggle="modal"
        href="#exampleModalToggle"
        role="button"
      >
        Open first modal
      </a>
    </div>
  );
}

export default OpenModal;
