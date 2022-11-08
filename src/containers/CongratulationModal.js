import React from "react";
import './congratulation.css';
const CongratulationModal = () => {
  <style>
    
  </style>
  return (
    <>
     
          <button
            type="button"
            class="btn btn-primary congratulation-modal"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
              modal
          </button>

          <div
            class="modal fade congratulation-modal"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog congratulation-modal">
              <div class="modal-content">
                <div class="modal-header">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    className="rounded mx-auto d-block"
                    height={"50px"}
                    alt=""
                  />
                </div>
                <div class="modal-body">
                  <p className="text-center">Congratulations!</p>
                  <p className="text-center">
                    {" "}
                    You have successfully shared 43.88765 ETH to Nectar Infotel
                    Wallet
                  </p>
                </div>
                <div class="modal-footer">
                  <p>Go to Home Page</p>
                </div>
              </div>
            </div>
          </div>
           
     
    </>
  );
};

export default CongratulationModal;
