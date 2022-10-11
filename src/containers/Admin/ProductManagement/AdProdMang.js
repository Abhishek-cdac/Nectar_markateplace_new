import React, { useState } from "react";
import "../admin.css";
import Progress from "../../../Components/Admin/Progress";
import dummyData from "../../Dummydata";
import RadioButton from "../../../Components/Admin/Radio";
import PartnerProducts from "./PartnerProducts";

const AdProdMang = () => {
  const [value, setValue] = useState(false);
  const [checkedValue, setIsChecked] = useState(1);

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
                      <button
                        // class="fa fa-plus AdCardIcon"
                        // type="button"
                        // aria-hidden="true"
                        // data-toggle="modal"
                        // data-target="#exampleModal"
                        type="button" class="btn btn-primary AdCardIcon" data-toggle="modal" data-target="#exampleModal"
                      >
                        {" "}
                      {/* </i> */}
                     Add
                      </button>
                    </p>
                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLongTitle"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">
                              Modal title
                            </h5>
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">...</div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" class="btn btn-primary">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="dropAdd">
                      <i class="fa fa-pencil AdCardIcon" aria-hidden="true"></i>
                      <a>Edit</a>
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
                          name="toggleProd"
                          id="toggleProd"
                        />
                        <label
                          className="label ProdManLabel"
                          htmlFor="toggleProd"
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
    </>
  );
};

export default AdProdMang;
