import React from "react";

const BecomeAPartner = () => {
  return (
    <>
      <div className="container pt-5">
        <h2 style={{ textAlign: "center" }}>
          Apply To Become a Nectar Partner
        </h2>
        <div className="row">
          <p>
            Nectar is a global company with diverse partners from around the
            world. Our partners are commited to delivering innovative solution
            and outstanding support in multile language.
          </p>
        </div>

        <form>
          <div class="row">
            <h5 className="formhead1">Company Details</h5>

            <div class="col-12 col-md-6 col-xs-12 col-sm-6 col-sm-3 col-md-6 col-xs-6 col-6 col-lg-6 col-xl-6">
              <label className="control-label labelhead" for="inputEmail4">
                Company Name
              </label>
              <br />

              <input type="text" class="form-control" />
            </div>
            <div class="col-12 col-md-6 col-xs-12 col-sm-6 col-sm-3 col-md-6 col-xs-6 col-6 col-lg-6 col-xl-6">
              <label className="labelhead" for="inputEmail4">
                Company Website
              </label>
              <br />
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6 col-xs-12 col-sm-6 col-sm-3 col-md-6 col-xs-6 col-6 col-lg-6 col-xl-6">
              <label className="labelhead" for="inputEmail4">
                First Name
              </label>
              <br />

              <input type="text" class="form-control" />
            </div>
            <div class="col-12 col-md-6 col-xs-12 col-sm-6 col-sm-3 col-md-6 col-xs-6 col-6 col-lg-6 col-xl-6">
              <label className="labelhead" for="inputEmail4">
                Last Name
              </label>
              <br />

              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6 col-xs-12 col-sm-6 col-sm-3 col-md-6 col-xs-6 col-6 col-lg-6 col-xl-6">
              <label className="labelhead" for="inputEmail4">
                Bussiness Registration
              </label>

              <br />

              <input type="text" class="form-control" />
              <label style={{ marginRight: 470 }} for="inputEmail4">
                Chamber of Commerce
              </label>
            </div>

            <div class="col-12 col-md-6 col-xs-12 col-sm-6 col-sm-3 col-md-6 col-xs-6 col-6 col-lg-6 col-xl-6">
              <label className="labelhead" for="inputEmail4">
                No. of Employees
              </label>
              <br />

              <input type="text" class="form-control" />
            </div>
          </div>

          <div>
            <div class="row">
              <div className="row pt-5">
                <h5 className="formhead1">Bussiness Address</h5>
              </div>
              <div class="col-12 col-md-6 col-xs-12 col-sm-6 col-sm-3 col-md-6 col-xs-6 col-6 col-lg-6 col-xl-6">
                <label className="labelhead" for="inputEmail4">
                  Country
                </label>
                <br />

                <input type="text" class="form-control" />
              </div>

              <div class="col-12 col-md-6 col-xs-12 col-sm-6 col-sm-3 col-md-6 col-xs-6 col-6 col-lg-6 col-xl-6">
                <label className="labelhead" for="inputEmail4">
                  State
                </label>
                <br />
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-6 col-xs-12 col-sm-6 col-sm-3 col-md-6 col-xs-6 col-6 col-lg-6 col-xl-6">
                <label className="labelhead" for="inputEmail4">
                  City
                </label>
                <br />

                <input type="text" class="form-control" />
              </div>
              <div class="col-12 col-md-6 col-xs-12 col-sm-6 col-sm-3 col-md-6 col-xs-6 col-6 col-lg-6 col-xl-6">
                <label className="labelhead" for="inputEmail4">
                  Street Address
                </label>
                <br />

                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-6 col-xs-12 col-sm-6 col-sm-3 col-md-6 col-xs-6 col-6 col-lg-6 col-xl-6">
                <label className="labelhead" for="inputEmail4">
                  Email
                </label>

                <br />

                <input type="text" class="form-control" />
              </div>

              <div class="col-12 col-md-6 col-xs-12 col-sm-6 col-sm-3 col-md-6 col-xs-6 col-6 col-lg-6 col-xl-6">
                <label className="labelhead" for="inputEmail4">
                  Data Centers
                </label>
                <br />

                <input type="text" class="form-control" />
              </div>
            </div>
          </div>

          <div>
            <div class="row">
              <div className="row pt-5">
                <h5 className="formhead1">Expertise / Interest</h5>
              </div>
              <div class="col-12 col-md-6 col-xs-12 col-sm-6 col-sm-3 col-md-6 col-xs-6 col-6 col-lg-6 col-xl-6">
                <label
                  style={{ marginBottom: 13 }}
                  className=""
                  for="inputEmail4"
                >
                  Primary Expertise/interest
                </label>
                <br />

                <input type="text" class="form-control" />
              </div>

              <div class="col-12 col-md-6 col-xs-12 col-sm-6 col-sm-3 col-md-6 col-xs-6 col-6 col-lg-6 col-xl-6">
                <label
                  className=" "
                  style={{ marginBottom: 13 }}
                  for="inputEmail4"
                >
                  How did you hear about nectar product partner
                </label>
                <br />
                <input type="text" class="form-control" />
              </div>
            </div>
            <br /> <br />
          </div>

          <div className="row">
            <h4 style={{ textAlign: "center" }}>
              I agree to the Terms of Service and Privacy Policy
            </h4>

            <div style={{ textAlign: "center" }}>
              <button type="button" class="btn  formbtn  btn-lg m-4  ">
                Submit
              </button>
              <button type="button" class="btn      btn-lg  m-4">
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default BecomeAPartner;
