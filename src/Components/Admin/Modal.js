import React from "react";
import dummyData from "../../containers/Dummydata";

// import { RiCloseLine } from "react-icons/ri"

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="AdProdmodal">
          <div className="modalHeader">
            <h5 className="heading">Dialog</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
          <div className="modalContent">
            {dummyData?.ProdCardMAn?.map((item) => {
              <div>
                <input type="checkbox"/><span>{item.title}</span>
              </div>;
            })}
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="deleteBtn" onClick={() => setIsOpen(false)}>
                Delete
              </button>
              <button className="cancelBtn" onClick={() => setIsOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
