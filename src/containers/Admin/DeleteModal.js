import React from "react";
import dummyData from "../Dummydata";

function DeleteModal() {
  return (
    // <div>
    //   <button
    //     type="button"
    //     class="btn btn-primary"
    //     data-bs-toggle="modal"
    //     data-bs-target="#exampleModal"
    //   >
    //     Launch demo modal
    //   </button>
    //   {dummyData &&
    //     dummyData.DeleteData.map((data) => (
    //       <div
    //         class="modal fade"
    //         id="exampleModal"
    //         tabindex="-1"
    //         aria-labelledby="exampleModalLabel"
    //         aria-hidden="true"
    //       >
    //         <div class="modal-dialog">
    //           <div class="modal-content">
    //             <div class="modal-header">
    //               <h5 class="modal-title" id="exampleModalLabel">
    //              {  data.deletetitle}
    //               </h5>
    //               <button
    //                 type="button"
    //                 class="btn-close"
    //                 data-bs-dismiss="modal"
    //                 aria-label="Close"
    //               ></button>
    //             </div>
    //             <div class="modal-body">
    //             {data.deletedescription}

    //             </div>
    //             <div class="modal-footer">
    //               <button
    //                 type="button"
    //                 class="btn btn-secondary"
    //                 data-bs-dismiss="modal"
    //               >
    //                 Close
    //               </button>
    //               <button type="button" class="btn btn-primary">
    //                 Delete
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    // </div>
    <div className="dropdown">
      <button
       className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown button
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            Action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Another action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </li>
      </ul>
    </div>
  );
}

export default DeleteModal;
