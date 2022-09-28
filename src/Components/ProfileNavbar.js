import React from 'react'
import ContactDetails from './ContactDetails'
import Products from './Products'
import Profile from './Profile'
import NectarCRMpricesubs from '../containers/NectarCRMpricesubs'
import Invoices from './Invoices'

function Navbar() {

    return (
        <div className="container">
            <ul class="nav nav-pills navtabs mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button
                        color="red"
                        class="nav-link active"
                        id="pills-overview-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-overview"
                        type="button"
                        role="tab"
                        aria-controls="pills-overview"
                        aria-selected="true"
                    >
                        Profile
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button
                        color="orange"
                        appearance="link"
                        class="nav-link"
                        id="pills-productscreen-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-productscreen"
                        type="button"
                        role="tab"
                        aria-controls="pills-productscreen"
                        aria-selected="false"
                    >
                        Product
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button
                        class="nav-link "
                        id="pills-review-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-review"
                        type="button"
                        role="tab"
                        aria-controls="pills-review"
                        aria-selected="false"
                    >
                        Invoices
                    </button>
                </li>

            </ul>
            <div class="tab-content" id="pills-tabContent">
                <div
                    class="tab-pane fade show active"
                    id="pills-overview"
                    role="tabpanel"
                    aria-labelledby="pills-overview-tab"
                >
                    <Profile />
                </div>
                <div
                    class="tab-pane fade"
                    id="pills-productscreen"
                    role="tabpanel"
                    aria-labelledby="pills-productscreen-tab"
                >
                    <ContactDetails />
                </div>
                <div
                    class="tab-pane fade"
                    id="pills-review"
                    role="tabpanel"
                    aria-labelledby="pills-review-tab"
                >

                    <Invoices />

                </div>

            </div>

        </div>

    )
}
export default Navbar

// import React from "react";
// import DummydataModal from "../containers/Admin/DummydataModal";
// function ProfileNavbar() {
//   return (
//     <>
//       <i
//         type="button"
//         className="fa fa-bars"
//         data-bs-toggle="modal"
//         data-bs-target="#exampleModal"
//       ></i>

//       <div
//         class="modal fade"
//         id="exampleModal"
//         tabindex="-1"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div class="modal-dialog" style={{width:"200px"}}>
//           <div class="modal-content">
//             <div class="modal-header">
//               <p class="modal-title" id="exampleModalLabel">
//                 <div className="container">
//                   <div className="row">
//                     <div className="col">
//                       {DummydataModal &&
//                         DummydataModal.modaldata.map((data) => (
//                           <div>
//                             <p className="pt-3 fs-h6">{data.product}</p>
//                             <div className="mx-2">
//                               <div class="form-check">
//                                 <input
//                                   class="form-check-input"
//                                   type="radio"
//                                   name="flexRadioDefault"
//                                   id="flexRadioDefault1"
//                                 />
//                                 <label
//                                   class="form-check-label text-dark"
//                                   for="flexRadioDefault1"
//                                 >
//                                   {data.productName1}
//                                 </label>
//                               </div>
//                               <div class="form-check">
//                                 <input
//                                   class="form-check-input"
//                                   type="radio"
//                                   name="flexRadioDefault"
//                                   id="flexRadioDefault2"
//                                   checked
//                                 />
//                                 <label
//                                   class="form-check-label text-dark"
//                                   for="flexRadioDefault2"
//                                 >
//                                   {data.productName2}
//                                 </label>
//                               </div>
//                               <div class="form-check">
//                                 <input
//                                   class="form-check-input"
//                                   type="radio"
//                                   name="flexRadioDefault"
//                                   id="flexRadioDefault2"
//                                   checked
//                                 />
//                                 <label
//                                   class="form-check-label text-dark"
//                                   for="flexRadioDefault2"
//                                 >
//                                   {data.productName3}
//                                 </label>
//                               </div>
//                               <div class="form-check">
//                                 <input
//                                   class="form-check-input"
//                                   type="radio"
//                                   name="flexRadioDefault"
//                                   id="flexRadioDefault2"
//                                   checked
//                                 />
//                                 <label
//                                   class="form-check-label text-dark"
//                                   for="flexRadioDefault2"
//                                 >
//                                   {data.productName4}
//                                 </label>
//                               </div>
//                             </div>
//                             <p className="">{data.paymentmode}</p>
//                             <div className="mx-2">
//                               <div class="form-check">
//                                 <input
//                                   class="form-check-input"
//                                   type="radio"
//                                   name="flexRadioDefault"
//                                   id="flexRadioDefault1"
//                                 />
//                                 <label
//                                   class="form-check-label text-dark"
//                                   for="flexRadioDefault1"
//                                 >
//                                   {data.paymentmode1}
//                                 </label>
//                               </div>
//                               <div class="form-check">
//                                 <input
//                                   class="form-check-input"
//                                   type="radio"
//                                   name="flexRadioDefault"
//                                   id="flexRadioDefault2"
//                                   checked
//                                 />
//                                 <label
//                                   class="form-check-label text-dark"
//                                   for="flexRadioDefault2"
//                                 >
//                                   {data.paymentmode2}
//                                 </label>
//                               </div>
//                               <div class="form-check">
//                                 <input
//                                   class="form-check-input"
//                                   type="radio"
//                                   name="flexRadioDefault"
//                                   id="flexRadioDefault2"
//                                   checked
//                                 />
//                                 <label
//                                   class="form-check-label text-dark"
//                                   for="flexRadioDefault2"
//                                 >
//                                   {data.paymentmode3}
//                                 </label>
//                               </div>
//                               <div class="form-check">
//                                 <input
//                                   class="form-check-input"
//                                   type="radio"
//                                   name="flexRadioDefault"
//                                   id="flexRadioDefault2"
//                                   checked
//                                 />
//                                 <label
//                                   class="form-check-label text-dark"
//                                   for="flexRadioDefault2"
//                                 >
//                                   {data.paymentmode4}
//                                 </label>
//                               </div>
//                             </div>
//                             <p>{data.paymentstatus}</p>
//                             <div className="mx-2">
//                               <div class="form-check">
//                                 <input
//                                   class="form-check-input"
//                                   type="radio"
//                                   name="flexRadioDefault"
//                                   id="flexRadioDefault1"
//                                 />
//                                 <label
//                                   class="form-check-label text-dark"
//                                   for="flexRadioDefault1"
//                                 >
//                                   {data.paymentstatus1}
//                                 </label>
//                               </div>
//                               <div class="form-check">
//                                 <input
//                                   class="form-check-input"
//                                   type="radio"
//                                   name="flexRadioDefault"
//                                   id="flexRadioDefault2"
//                                   checked
//                                 />
//                                 <label
//                                   class="form-check-label text-dark"
//                                   for="flexRadioDefault2"
//                                 >
//                                   {data.paymentstatus2}
//                                 </label>
//                               </div>
//                             </div>
//                             <p>{data.paymentDate}</p>
//                             <div className="mx-2">
//                               <div class="form-check">
//                                 <input
//                                   class="form-check-input"
//                                   type="radio"
//                                   name="flexRadioDefault"
//                                   id="flexRadioDefault1"
//                                 />
//                                 <label
//                                   class="form-check-label text-dark"
//                                   for="flexRadioDefault1"
//                                 >
//                                   {data.paymentDate1}
//                                 </label>
//                               </div>
//                               <div class="form-check">
//                                 <input
//                                   class="form-check-input"
//                                   type="radio"
//                                   name="flexRadioDefault"
//                                   id="flexRadioDefault2"
//                                   checked
//                                 />
//                                 <label
//                                   class="form-check-label text-dark"
//                                   for="flexRadioDefault2"
//                                 >
//                                   {data.paymentDate2}
//                                 </label>
//                               </div>
//                               <div class="form-check">
//                                 <input
//                                   class="form-check-input"
//                                   type="radio"
//                                   name="flexRadioDefault"
//                                   id="flexRadioDefault2"
//                                   checked
//                                 />
//                                 <label
//                                   class="form-check-label text-dark"
//                                   for="flexRadioDefault2"
//                                 >
//                                   {data.paymentDate3}
//                                   <span className="mx-3">
//                                     <i
//                                       class="fa fa-calendar"
//                                       aria-hidden="true"
//                                     ></i>
//                                   </span>
//                                 </label>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                     </div>
//                   </div>
//                 </div>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ProfileNavbar;
