import React from "react";
import "./OrderManagment.css";
import dummyData from "../Dummydata";
import Tables from "../../Components/Admin/Tables";

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
                {/* <input
                  type="email"
                  class="form-control search"
                  id="exampleInputEmail1"
                  placeholder="search"
                  aria-describedby="emailHelp"
                /> */}
                <div class="position-relative">
                  <i class="fa fa-search position-absolute"></i>
                  <input
                    class="form-control"
                    type="search"
                    placeholder="search"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <button className="btn-sarch text-center">Search</button>
            </div>

            <div className="col-md-3 text-end">
              <i className="fa fa-bars"></i>
            </div>
          </div>
        </div>


        <Tables
          column={Dummuydataordermanagment?.orderManagment}
          data={Dummuydataordermanagment.orderManagmentdata}
        />

        {/* <div className="row">
          <div className="col-lg-12">
            <div className="ordermanagment-table">
              <table class="table ordermanagment-table">
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
                        <td scope="row">{data.Number}</td>

                        <td>{data.fullName}</td>
                        <td style={{ color: "#3CA3CF" }}>{data.orderId}</td>
                        <td>{data.orderDate}</td>
                        <td>{data.Amount}</td>
                        <td
                          className={`${
                            data.Status === "PAID"
                              ? "table-paid-btn"
                              : "table-pending-btn"
                          } m-2`}
                        >
                          {data.Status}
                        </td>
                        <td>
                          <i
                            class="fa fa-eye"
                            aria-hidden="true"
                            data-bs-toggle="modal"
                            href="#exampleModalToggle"
                            role="button"
                          ></i>
                          <div className="container">
                            <div className="row">
                              <div className="col-md-12">
                                {dummyData &&
                                  dummyData.OrderInvoice.map((data) => (
                                    <div
                                      class="modal fade"
                                      id="exampleModalToggle"
                                      aria-hidden="true"
                                      aria-labelledby="exampleModalToggleLabel"
                                      tabindex="-1"
                                    >
                                      <div
                                        class="modal-dialog modal-dialog-centered modal-xl invoice-modal"
                                        style={{
                                          fontSize: "18px",
                                          color: "gray",
                                        }}
                                      >
                                        <div class="modal-content">
                                          <div class="modal-header">
                                            <h1
                                              class="modal-title"
                                              id="exampleModalToggleLabel"
                                            >
                                              {data.OrderInvoice}
                                            </h1>
                                            <div className="head-logo-box">
                                              <img
                                                className="header_logo"
                                                src={data.img}
                                                align="middle"
                                                style={{
                                                  borderRight:
                                                    "1px solid black",
                                                  height: "36px",
                                                }}
                                              />
                                              <p className="marketplace_content">
                                                {data.marketplace}
                                              </p>
                                            </div>
                                          </div>
                                          <div class="modal-body m-2">
                                            <div class="row">
                                              <div class="col-md-6">
                                                <div className="vertical-lineorderinvoices">
                                                  <p>
                                                    <strong>
                                                      {" "}
                                                      {data.orderno}
                                                    </strong>
                                                    <span>{data.no} </span>{" "}
                                                  </p>
                                                  <p className="mx-3">
                                                    {" "}
                                                    <strong>
                                                      {data.date}
                                                      Order Date:
                                                    </strong>{" "}
                                                    <span>
                                                      {" "}
                                                      {data.orderDate}{" "}
                                                    </span>{" "}
                                                  </p>
                                                  <p className="mx-4">
                                                    {" "}
                                                    <strong>
                                                      {data.orderDate}
                                                    </strong>
                                                    <span>{data.id} </span>
                                                  </p>
                                                  <p className="mx-2">
                                                    {" "}
                                                    <strong>
                                                      {" "}
                                                      {data.payername}
                                                    </strong>
                                                    <span>{data.name}</span>
                                                  </p>
                                                </div>
                                              </div>

                                              <div class="col-md-6 ms-auto">
                                                <div className="">
                                                  <p></p>
                                                  <strong>
                                                    {data.companyname}
                                                  </strong>
                                                  <br></br>
                                                  <strong>
                                                    {" "}
                                                    {data.office}
                                                  </strong>

                                                  <p>
                                                    {" "}
                                                    {data.address}
                                                    <br></br>
                                                    {data.phoneno}
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="orderinvoices-table"
                                            style={{
                                              fontSize: "18px",
                                              color: "gray",
                                            }}
                                          >
                                            <table class="table table-bordered orderinvoices-table">
                                              <thead>
                                                <tr>
                                                  <th>
                                                    <p>{data.product}</p>
                                                  </th>
                                                  <th scope="col">
                                                    <p>Discription</p>
                                                  </th>
                                                  <th scope="col">
                                                    {data.unit}
                                                  </th>
                                                  <th scope="col">
                                                    {" "}
                                                    {data.vat}
                                                  </th>
                                                  <th scope="col">
                                                    {data.total}
                                                  </th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr style={{ height: "350px" }}>
                                                  <th scope="row">
                                                    {data.productname}
                                                  </th>
                                                  <th className="table_data">
                                                    {data.employee}
                                                    <br></br>
                                                    {data.employee2}
                                                  </th>
                                                  <th>{data.unitdata}</th>
                                                  <th>10% {data.vatdata}</th>
                                                  <th className="table_datatotal">
                                                    {data.totaldata}
                                                  </th>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <button className="btn_grandtotal text-white">
                                            {" "}
                                            {data.btn}
                                            <span className="mx-5">
                                              {data.grandtotal}
                                            </span>
                                          </button>
                                          <div className="mt-5"></div>
                                        </div>
                                      </div>
                                      <div className="btn_invoices mx-5">
                                        <button
                                          class="btn btn-primary btn-lg mx-2 "
                                          type="submit"
                                        >
                                          {data.printbtn}
                                        </button>
                                        <button
                                          type="button"
                                          class="btn btn-outline-primary btn-lg mx-2 "
                                        >
                                          {data.download}
                                        </button>
                                        <button
                                          type="button"
                                          class="btn btn-outline-secondary btn-lg mx-2"
                                        >
                                          {data.cancel}
                                        </button>
                                      </div>
                                    </div>
                                  ))}
                              </div>
                            </div>
                          </div>

                          <div className="trash-icon mx-5 ">
                            <i
                              class="fa fa-trash"
                              aria-hidden="true"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            ></i>
                          </div>

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
        </div> */}
      </div>
    </div>
  );
}

export default OrderManagment;
