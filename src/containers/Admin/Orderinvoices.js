import React from "react";
import "./orderinvoices.css";

function Orderinvoices() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-mad-12">
          <div
            class="modal fade"
            id="exampleModalToggle"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel"
            tabindex="-1"
          >
            <div class="modal-dialog modal-dialog-centered modal-xl invoice-modal">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title" id="exampleModalToggleLabel">
                    Order Invoice
                  </h1>
                  <div className="head-logo-box">
                    <img
                      className="header_logo"
                      src="assets/images/60-X-60.png"
                      align="middle"
                      style={{ borderRight: "1px solid black", height: "36px" }}
                    />
                    <p className="marketplace_content">Marketplace</p>
                  </div>
                </div>
                <div class="modal-body m-2">
                  <div class="row">
                    <div class="col-md-6">
                      <div className="vertical-lineorderinvoices">
                        <p>
                          <strong> Order Number:</strong>
                          <span>110 </span>{" "}
                        </p>
                        <p className="mx-3">
                          {" "}
                          <strong>Order Date:</strong>{" "}
                          <span> 16/08/2021: 18:06 PM </span>{" "}
                        </p>
                        <p className="mx-4">
                          {" "}
                          <strong>Order ID:</strong>
                          <span>126589857 </span>
                        </p>
                        <p className="mx-2">
                          {" "}
                          <strong> Payer Name:</strong>
                          <span> Mark Lorenson</span>
                        </p>
                      </div>
                    </div>

                    <div class="col-md-6 ms-auto">
                      <div className="">
                        <p></p>
                        <strong>Nectar Infotel Solutions Pvt. Ltd.</strong>
                        <br></br>
                        <strong>Tech Office</strong>

                        <p>
                          {" "}
                          Office No. 11, Block-4A (SEZ), SP Infocity IT Park,
                          Phursungi, Pune-Saswad Road, Pune, Maharashtra-412308,
                          India.<br></br> Tel : +91 (20) 2698 2255
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>
                        <p>Product Name</p>
                      </th>
                      <th scope="col">
                        <p>Discription</p>
                      </th>
                      <th scope="col">Unit</th>
                      <th scope="col">VAT %</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ height: "350px" }}>
                      <th scope="row">Nectar HRMS</th>
                      <th className="table_data">
                        Employee Management with the <br></br>10 User and full
                        services allocated
                      </th>
                      <th>2</th>
                      <th>10%</th>
                      <th className="table_datatotal">$10254.00</th>
                    </tr>
                  </tbody>
                </table>
                <button className="btn_grandtotal text-white">
                  Grand Total <span className="mx-5">$12344.00</span>
                </button>
                <div className="mt-5"></div>
              </div>
            </div>
            <div className="btn_invoices mx-5">
              <button class="btn btn-primary btn-lg mx-2 " type="submit">
                Print Order
              </button>
              <button
                type="button"
                class="btn btn-outline-primary btn-lg mx-2 "
              >
                Download
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg mx-2"
              >
                Cancel
              </button>
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
    </div>
  );
}

export default Orderinvoices;
