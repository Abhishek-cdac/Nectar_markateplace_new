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