import React from "react";
import DummydataModal from "./DummydataModal";
import "./OrderManagmentModal.css";

function OrderManagmentModal() {


  return (
    <div className="container">
      <div className="row">
        <div className="ordermanagmemt_modal m-5">
          <div className="col">
            {DummydataModal &&
              DummydataModal.modaldata.map((data) => (
                <div>
                  <p className="pt-3">{data.product}</p>
                  <div className="mx-2">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        class="form-check-label text-dark"
                        for="flexRadioDefault1"
                      >
                        {data.productName1}
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                      />
                      <label
                        class="form-check-label text-dark"
                        for="flexRadioDefault2"
                      >
                        {data.productName2}
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                      />
                      <label
                        class="form-check-label text-dark"
                        for="flexRadioDefault2"
                      >
                        {data.productName3}
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                      />
                      <label
                        class="form-check-label text-dark"
                        for="flexRadioDefault2"
                      >
                        {data.productName4}
                      </label>
                    </div>
                  </div>
                  <p className="">{data.paymentmode}</p>
                  <div className="mx-2">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        class="form-check-label text-dark"
                        for="flexRadioDefault1"
                      >
                        {data.paymentmode1}
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                      />
                      <label
                        class="form-check-label text-dark"
                        for="flexRadioDefault2"
                      >
                        {data.paymentmode2}
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                      />
                      <label
                        class="form-check-label text-dark"
                        for="flexRadioDefault2"
                      >
                        {data.paymentmode3}
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                      />
                      <label
                        class="form-check-label text-dark"
                        for="flexRadioDefault2"
                      >
                        {data.paymentmode4}
                      </label>
                    </div>
                  </div>
                  <p >{data.paymentstatus}</p>
                  <div className="mx-2">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        class="form-check-label text-dark"
                        for="flexRadioDefault1"
                      >
                        {data.paymentstatus1}
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                      />
                      <label
                        class="form-check-label text-dark"
                        for="flexRadioDefault2"
                      >
                        {data.paymentstatus2}
                      </label>
                    </div>
                  </div>
                  <p>{data.paymentDate}</p>
                  <div className="mx-2">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        class="form-check-label text-dark"
                        for="flexRadioDefault1"
                      >
                        {data.paymentDate1}
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                      />
                      <label
                        class="form-check-label text-dark"
                        for="flexRadioDefault2"
                      >
                        {data.paymentDate2}
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                      />
                      <label
                        class="form-check-label text-dark"
                        for="flexRadioDefault2"
                      >
                        {data.paymentDate3}
                        <span className="mx-3"><i class="fa fa-calendar" aria-hidden="true"></i></span>
                      </label>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderManagmentModal;
