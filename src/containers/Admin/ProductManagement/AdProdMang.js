import React, { useState } from "react";
import "../admin.css";
import Progress from "../../../Components/Admin/Progress";
import dummyData from "../../Dummydata";
import RadioButton from "../../../Components/Admin/Radio";
import PartnerProducts from "./PartnerProducts";
import Modal from "../../../Components/Admin/Modal";

const AdProdMang = () => {
  const [value, setValue] = useState(false);
  const [checkedValue, setIsChecked] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState("");

  const handleMOdal = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const handleToggle = () => {
    setValue(!value);
  };
  return (
    <>
      <div class="col text-left adminSecHeading">
        <h4 className="mt-4 mb-4">{`Product Management / ${
          checkedValue == 1 ? "Registered User" : "Subscribed User"
        }`}</h4>
      </div>
      
      <div className="row">
        <div class="col col-lg-6 UserManRadio">
          {dummyData?.productManRadio.map((item) => {
            return (
              <RadioButton
                type="radio"
                key={item.id}
                id={item.id}
                name="radioGroup"
                className="UserRadio"
                label={item.label}
                checked={checkedValue === item.id}
                onChange={() => setIsChecked(item.id)}
              />
            );
          })}
        </div>
        <hr />
        {checkedValue == 1 ? (
          <div className="row">
            {dummyData?.ProdCardMAn?.map((item) => {
              return (
                <div class="container card AdProdCard">
                  <button
                    type="button"
                    className="fa fa-ellipsis-v AdcardMenu"
                    data-bs-toggle="dropdown"
                    aria-expande="false"
                  />
                  <div className="dropdown-menu AdEditMenuDrop">
                    <p className="dropAdd">
                      <i
                        style={{ paddingRight: "10px" }}
                        class="fa fa-add AdCardIcon"
                        aria-hidden="true"
                        data-bs-toggle="modal"
                        href=".Ad-Add-Modal-lg"
                        role="button"
                      ></i>
                      <span>Add</span>
                    </p>

                    <p className="dropAdd">
                      <i
                        class="fa fa-pencil AdCardIcon"
                        aria-hidden="true"
                        data-bs-toggle="modal"
                        href=".Ad-Edit-Modal-long"
                        role="button"
                        // data-toggle="modal"
                        // data-target=".bd-example-modal-lg"
                      ></i>
                      <span>Edit</span>
                    </p>
                  </div>

                  <center>
                    <img
                      class="card-img-top-center"
                      src={item.image}
                      alt="Card image cap"
                    />
                  </center>
                  <div class="card-body">
                    <div className="cardBodyToggle">
                      <h5 class="card-title AdProdManTitle">&12345</h5>
                      <div className="toggle-switch prodMantoggle-switch">
                        <input
                          type="checkbox"
                          className="checkbox"
                          name={item.name}
                          id={item.name}
                        />
                        <label
                          className="label ProdManLabel"
                          htmlFor={item.name}
                        >
                          <span className="inner ProdManInner" />
                          <span className="switch ProdManSwitch" />
                        </label>
                      </div>
                    </div>
                    <p class="card-text AdProdMantext">
                      Last Modified: 15/12/2021
                    </p>
                    <div className="ProdcardBottom">
                      <div className="pt-3 ">
                        <span class="fa fa-star checked m-2"></span>
                        <span class="fa fa-star checked m-2"></span>
                        <span class="fa fa-star checked m-2"></span>
                        <span class="fa fa-star checked m-2"></span>
                        <span class="fa fa-star checked m-2"></span>
                      </div>
                      <button
                        type="button"
                        className={`fa fa-caret-down dropdown-toggle-split ProdCardBut`}
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      ></button>
                      <div className="dropdown-menu" style={{ width: "100%" }}>
                        <div className="pt-3 AdProdStar">
                          <span class="fa fa-star checked m-2"></span>
                          <span class="fa fa-star checked m-2"></span>
                          <span class="fa fa-star checked m-2"></span>
                          <span class="fa fa-star checked m-2"></span>
                          <span class="m-2 AdProdMantext">4 out of 5</span>
                        </div>
                        <p class="m-2 AdProdMantext">1,25,689 Global Rating</p>
                        {dummyData?.ProdManCard?.map((item) => (
                          <div className="ProdManFooter row">
                            <p className="heading">{item.title}</p>
                            <div className="ProdManProg">
                              <Progress
                                ProgressclassName={"ProdManProgress"}
                                progressmain={"ProdCardMain"}
                              />
                            </div>
                            <small className="footer">{item.per}</small>
                          </div>
                        ))}
                        <hr />
                        <center>
                          <a className="AdProdSeeReview">
                            See all Customer Review's
                          </a>
                        </center>
                      </div>
                      <p className="AdProdMantextCount">1,245</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <PartnerProducts />
        )}
      </div>
      {/* Add MOdaal */}
      <div className="container">
        <div
          class="modal fade Ad-Add-Modal-lg AdProdModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg" style={{ display: "block" }}>
            <div class="modal-content row" style={{ flexDirection: "row" }}>
              {dummyData?.ProdCardMAn?.map((item) => {
                return (
                  <div className="col-lg-4">
                    {console.log(item)}
                    <input
                      type="checkbox"
                      id="Products"
                      name="Products"
                      value={products}
                    />
                    <label for="Products">
                      <img src={item.image} />
                    </label>
                  </div>
                );
              })}{" "}
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal  */}
      <div className="container">
        <div
          class="modal fade Ad-Edit-Modal-long AdProdModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg" style={{ display: "block" }}>
            <div class="modal-content col" style={{ flexDirection: "column" }}>
              <form>
                <div class="form-group row">
                  <div className=" col AdEditInput">
                    <label for="Products">visibility</label>
                    <select
                      className=" form-control AdInputForm"
                      placeholder="Visibility"
                    >
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <p className="AdEditModalText">
                    This option must vary with the role assigned to the users
                    like: Super Admin and Admin, If you wish to deactivate the
                    option please get Support Here.
                  </p>

                  <div className=" col AdEditInput">
                    <label for="Products">Discoverability</label>
                    <select className=" form-control AdInputForm">
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <p className="AdEditModalText">
                    Configure customers ability to find this app on Marketplace
                    site.
                  </p>
                  <div className=" col AdEditInput">
                    <label for="Products">Name</label>
                    <input
                      className=" form-control AdInputForm"
                      type="text"
                      id="Products"
                      name="Products"
                      value={products}
                      placeholder="Enter email"
                    />
                  </div>
                  <p className="AdEditModalText">
                    Give your app a descriptive name in 40 characters or less,
                    double check our Branding Guidelines
                  </p>
                  <div className=" col AdEditInput">
                    <label for="Products">Tagline</label>
                    <input
                      className=" form-control AdInputForm"
                      type="text"
                      id="Products"
                      name="Products"
                      value={products}
                    />
                  </div>
                  <p className="AdEditModalText">
                    Provide a short phrase that summarizes what your product
                    does in 130 character and or less, Tagline can't end with
                    punctuation.
                  </p>
                  <div className=" col AdEditInput">
                    <label for="Products">Summary</label>
                    <input
                      className=" form-control AdInputForm"
                      type="text"
                      id="Products"
                      name="Products"
                      value={products}
                    />
                  </div>
                  <p className="AdEditModalText">
                    Summarize your product functionality in 250 characters or
                    less. This field is displayed in the in-app version of the
                    Nectar Marketplace.
                  </p>
                  <div className=" col AdEditInput">
                    <label for="Products">Category</label>
                    <input
                      className=" form-control AdInputForm"
                      type="text"
                      id="Products"
                      name="Products"
                      value={products}
                    />
                  </div>
                  <p className="AdEditModalText">
                    Choose up to 4 categories that describe your products.
                  </p>
                  <div className=" col AdEditInput">
                    <label for="Products">Status</label>
                    <select className=" form-control AdInputForm">
                      <option selected>Choose...</option>
                      <option value="1">Active</option>
                      <option value="1">InActive</option>
                    </select>
                  </div>
                </div>
              </form>
              <button
                type="button"
                className="AdEditModalBut align-self-center col-lg-3 btn-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdProdMang;
