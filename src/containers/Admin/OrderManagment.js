import React from "react";
import "./OrderManagment.css";
import dummyData from "../Dummydata";

import Dummuydataordermanagment from "./Dummuydataordermanagment";

function OrderManagment() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h4 className="my-3">Order Management</h4>
          <hr className="style1" />
          <div className="row">
            <div className="col-md-6">
              <div class="mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="search"
                  
                  aria-describedby="emailHelp"
                  
                />
              </div>
            </div>

            <div className="col-md-3">
              <button className="btn-search text-center">Search</button>
            </div>

            <div className="col-md-3 text-end">
              <i className="fa fa-bars"></i>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <table class="table">
              <thead>
                {Dummuydataordermanagment &&
                  Dummuydataordermanagment.orderManagment.map((data) => (
                    <tr>
                      <th scope="col">{data.Number}</th>
                      <th scope="col">{data.fullName}</th>
                      <th scope="col">{data.orderId}</th>
                      <th scope="col">{data.orderDate}</th>
                      <th scope="col">{data.Amount}</th>
                      <th scope="col">{data.Status}</th>
                      <th scope="col">{data.Action}</th>
                    </tr>
                  ))}
              </thead>
              <tbody>
                {Dummuydataordermanagment &&
                  Dummuydataordermanagment.orderManagmentdata.map((data) => (
                    <tr>
                      <th scope="row">{data.Number}</th>

                      <td>{data.fullName}</td>
                      <td style={{ color: "#3CA3CF" }}>{data.orderId}</td>
                      <td>{data.orderDate}</td>
                      <td>{data.Amount}</td>
                      <button className="table-paid-btn m-2">
                        {data.Status}
                      </button>
                      <td>
                        <i
                          class="fa fa-eye m-2"
                          aria-hidden="true"
                          data-bs-toggle="modal"
                          href="#exampleModalToggle"
                          role="button"
                        ></i>
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
                                      <h1
                                        class="modal-title"
                                        id="exampleModalToggleLabel"
                                      >
                                        Order Invoice
                                      </h1>
                                      <div className="head-logo-box">
                                        <img
                                          className="header_logo"
                                          src="assets/images/60-X-60.png"
                                          align="middle"
                                          style={{
                                            borderRight: "1px solid black",
                                            height: "36px",
                                          }}
                                        />
                                        <p className="marketplace_content">
                                          Marketplace
                                        </p>
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
                                              <span>
                                                {" "}
                                                16/08/2021: 18:06 PM{" "}
                                              </span>{" "}
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
                                            <strong>
                                              Nectar Infotel Solutions Pvt. Ltd.
                                            </strong>
                                            <br></br>
                                            <strong>Tech Office</strong>

                                            <p>
                                              {" "}
                                              Office No. 11, Block-4A (SEZ), SP
                                              Infocity IT Park, Phursungi,
                                              Pune-Saswad Road, Pune,
                                              Maharashtra-412308, India.
                                              <br></br> Tel : +91 (20) 2698 2255
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
                                            Employee Management with the{" "}
                                            <br></br>10 User and full services
                                            allocated
                                          </th>
                                          <th>2</th>
                                          <th>10%</th>
                                          <th className="table_datatotal">
                                            $10254.00
                                          </th>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <button className="btn_grandtotal text-white">
                                      Grand Total{" "}
                                      <span className="mx-5">$12344.00</span>
                                    </button>
                                    <div className="mt-5"></div>
                                  </div>
                                </div>
                                <div className="btn_invoices mx-5">
                                  <button
                                    class="btn btn-primary btn-lg mx-2 "
                                    type="submit"
                                  >
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
                          </div>
                        </div>
                        <i
                          class="fa fa-trash mx-4"
                          aria-hidden="true"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                       
                        ></i>

                        {dummyData &&
                          dummyData.DeleteData.map((data) => (
                            <div
                              class="modal fade"
                              id="exampleModal"
                              tabindex="-1"
                              aria-labelledby="exampleModalLabel"
                              aria-hidden="true"
                            >
                              <div class="modal-dialog delete-Modal">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5
                                      class="modal-title"
                                      id="exampleModalLabel"
                                    >
                                      {data.deletetitle}
                                    </h5>
                                    <button
                                      type="button"
                                      class="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                  </div>
                                  <div class="modal-body">
                                    {data.deletedescription}
                                  </div>
                                  <div className="delete-modal">
                                    <div class="modal-footer ">
                                      <button
                                        type="button"
                                        class="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                      <button
                                        type="button"
                                        class="btn btn-primary"
                                      >
                                        Delete
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderManagment;
