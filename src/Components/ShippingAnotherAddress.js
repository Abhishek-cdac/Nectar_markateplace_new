import React from 'react'

function ShippingAnotherAddress() {
  return (
    <>
    <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 col-md-8">
            <div className="row mt-4">
              <div className="col-lg-6">
                <label for="name" class="form-label">
                  First Name <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  id="fname"
                  class="form-control"
                  aria-describedby="passwordHelpBlock"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="col-lg-6">
                <label for="name" class="form-label">
                  Last Name <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  id="lname"
                  class="form-control"
                  aria-describedby="passwordHelpBlock"
                  placeholder="Enter Last Name"
                />
              </div>
            </div>
            <div className="add mt-3">
              <label for="name" class="form-label">
                Address Line1 <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                id="fname"
                class="form-control"
                aria-describedby="passwordHelpBlock"
                placeholder="Street name and House number"
              />
            </div>
            <div className="add1 mt-3">
              <label for="name" class="form-label">
                Address Line2(Optional)
              </label>
              <input
                type="text"
                id="fname"
                class="form-control"
                aria-describedby="passwordHelpBlock"
              />
            </div>
            <div className="row mt-4">
              <div className="col-lg-6">
                <label for="name" class="form-label">
                  City <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  id="fname"
                  class="form-control"
                  aria-describedby="passwordHelpBlock"
                />
              </div>
              <div className="col-lg-6">
                <label for="name" class="form-label">
                  Zip Code <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="number"
                  id="lname"
                  class="form-control"
                  aria-describedby="passwordHelpBlock"
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-6">
                <label for="name" class="form-label">
                  Phone <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="number"
                  id="fname"
                  class="form-control"
                  aria-describedby="passwordHelpBlock"
                />
              </div>
              <div className="col-lg-6">
                <label for="name" class="form-label">
                  Email Address <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="email"
                  id="lname"
                  class="form-control"
                  aria-describedby="passwordHelpBlock"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-4"></div>
        </div>
      </div>
    </>
  )
}

export default ShippingAnotherAddress