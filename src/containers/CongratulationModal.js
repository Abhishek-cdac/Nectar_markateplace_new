import React from "react";
import { Link } from "react-router-dom";
import "./congratulation.css";
import { useNavigate } from "react-router-dom";
const CongratulationModal = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <button
        type="button"
        class="btn btn-primary congratulation-modal"
        data-bs-toggle="modal"
        data-bs-target="#congratulationeModal"
      >
        modal
      </button> */}

      <div
        class="modal fade congratulation-modal"
        id="congratulationeModal"
        tabindex="-1"
        aria-labelledby="congratulationeModal"
        aria-hidden="true"
      >
        <div class="modal-dialog congratulation-modal">
          <div class="modal-content">
            <div class="modal-header">
              <img
                src="/assets/images/Group 3047.png"
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
              {/* <Link to="/nectarcrmtab">
                <p data-bs-dismiss="modal" aria-label="Close"> Go to Home Page</p>
              </Link> */}
               <p  onClick={() => navigate("/nectarcrmtab")}>Go to Home page</p>
             
                  
                
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CongratulationModal;
