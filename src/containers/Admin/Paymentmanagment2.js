import React from "react";

import "./Paymentmanagment.css";
import { useNavigate } from "react-router-dom";

function Paymentmanagment2() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <nav class="navbar bg-white">
            <div class="container">
              <a class="navbar-brand" href="#">
                <i
                  class="fa fa-long-arrow-left"
                  onClick={() => navigate("/admin/paymentmanagament")}
                  aria-hidden="true"
                ></i>
                <img
                  src="/assets/images/user3.png"
                  alt="Bootstrap"
                  //   width="35"
                  //   height="24"
                />
                <span className="text-muted">Mark Lorenson</span>
              </a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-12 mt-4">
            <div className="backgraound_white p-3">
              <h5 className>Payment Management</h5>
              <div className="row">
                <div className="col-md-6 mt-4">
                  <form>
                    <span> Payer Name:</span>
                    <input
                    style={{height:"38px"}}
                      type="text"
                      name="firstname"
                      className="inputfield "
                      placeholder="Mark Lorenson"
                    />{" "}
                  </form>
                  <br></br>
                  <form>
                    <span>Subscription Type:</span>
                    <input
                      style={{height:"38px"}}
                      type="text"
                      name="firstname"
                      className=""
                      placeholder="Partner"
                    />
                  </form>
                  <br></br>
                  <form>
                    <span>Amount Transferred:</span>

                    <input
                      style={{height:"38px"}}
                      type="text"
                      name="firstname"
                      className=""
                      placeholder="$1000.00"
                    />
                  </form>
                  <br></br>
                  <form>
                    <span> Transaction ID:</span>

                    <input
                      style={{height:"38px"}}
                      type="text"
                      name="firstname"
                      className="transaction-id"
                      placeholder="#ADFV023658975661"
                    />
                  </form>
                </div>

                <div className="col-md-6 mt-4">
                  <form>
                    <span> Product Name:</span>

                    <input
                      style={{height:"38px"}}
                      type="text"
                      name="firstname"
                      className=""
                      placeholder="Nectar HRMS"
                    />
                  </form>
                  <br></br>
                  <form>
                    <span>Transaction Mode:</span>
                    <input
                      style={{height:"38px"}}
                      type="text"
                      name="firstname"
                      className=""
                      placeholder="Net Banking"
                    />
                  </form>
                  <br></br>
                  <form>
                    <span>Invoice Number:</span>

                    <input
                      style={{height:"38px"}}
                      type="text"
                      name="firstname"
                      className="invoice-number"
                      placeholder="invoice No. 000098567"
                    />
                  </form>
                  <br></br>

                  <form>
                    <span> Status:</span>

                    <input
                      style={{height:"38px"}}
                      type="text"
                      name="firstname"
                      className=""
                      placeholder="Completed"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Paymentmanagment2;
