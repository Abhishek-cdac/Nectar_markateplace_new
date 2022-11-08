import React from "react";

const BecomeAPartner = () => {
  return (
    <>
      <div className="container pt-5">
        <h2 style={{ textAlign: "center" }}>
          Apply To Become a Nectar Partner
        </h2>
        <div className="row">
          <p  style={{fontSize:"small" , textAlign:"center"}}>
            Nectar is a global company with diverse partners from around the
            world. Our partners are commited to delivering innovative solution
            and outstanding support in multile language.
          </p>
        </div>

        <form>
          <div class="row pt-5 ">
            <h4 className="formhead1">Company Details</h4>

            <div class="col-12 col-md-6 col-xs-12 col-sm-6 col-md-6 col-xs-6 ">
              <label className="control-label labelhead" for="inputEmail4">
                Company Name<span class="required" style={{color:"red"}}>*</span>
              </label>
              <br />

              <input type="text" class="form-control" />
            </div>
            <div class="col-12 col-md-6 col-xs-12 col-sm-6 col-md-6  col-xs-6">
              <label className="labelhead" for="inputEmail4">
                Company Website<span class="required" style={{color:"red"}}>*</span>
              </label>
              <br />
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="row pt-2" >
            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
              <label className="labelhead" for="inputEmail4">
                First Name<span class="required" style={{color:"red"}}>*</span>
              </label>
              <br />

              <input type="text" class="form-control" />
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <label className="labelhead" for="inputEmail4">
                Last Name
              </label>
              <br />

              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="row pt-2">
            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <label className="labelhead" for="inputEmail4">
                Bussiness Registration<span class="required" style={{color:"red"}}>*</span>
              </label>

              <br />

              <input type="text" class="form-control" />
              <label style={{ marginRight: 470 }} for="inputEmail4">
                <p style={{fontSize:"13px"}}>Chamber of Commerce</p>
              </label>
            </div>

            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <label className="labelhead" for="inputEmail4">
                No. of Employees<span class="required" style={{color:"red"}}>*</span>
              </label>
              <br />

              <input type="text" class="form-control" />
            </div>
          </div>

          <div>
            <div class="row pt-2">
              <div className="row pt-5">
                <h4 className="formhead1">Bussiness Address</h4>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <label className="labelhead" for="inputEmail4">
                  Country<span class="required" style={{color:"red"}}>*</span>
                </label>
                <br />

                <input type="text" class="form-control" />
              </div>

              <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <label className="labelhead" for="inputEmail4">
                  State<span class="required" style={{color:"red"}}>*</span>
                </label>
                <br />
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="row pt-2">
              <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <label className="labelhead" for="inputEmail4">
                  City<span class="required" style={{color:"red"}}>*</span>
                </label>
                <br />

                <input type="text" class="form-control" />
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <label className="labelhead" for="inputEmail4">
                  Street Address<span class="required" style={{color:"red"}}>*</span>
                </label>
                <br />

                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="row pt-2">
              <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <label className="labelhead" for="inputEmail4">
                  Email<span class="required" style={{color:"red"}}>*</span>
                </label>

                <br />

                <input type="text" class="form-control" />
              </div>

              <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <label className="labelhead" for="inputEmail4">
                  Data Centers<span class="required" style={{color:"red"}}>*</span>
                </label>
                <br />

                <input type="text" class="form-control" />
              </div>
            </div>
          </div>

          <div>
            <div class="row pt-2">
              <div className="row pt-5">
                <h4 className="formhead1">Expertise / Interest</h4>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <label
                  style={{ marginBottom: 13 }}
                  className=""
                  for="inputEmail4"
                >
                  Primary Expertise/interest<span class="required" style={{color:"red"}}>*</span>
                </label>
                <br />

                <input type="text" class="form-control" />
              </div>

              <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <label
                  className=" "
                  style={{ marginBottom: 13 }}
                  for="inputEmail4"
                >
                  How did you hear about nectar product partner<span class="required" style={{color:"red"}}>*</span>
                </label>
                <br />
                <input type="text" class="form-control" />
              </div>
            </div>
            <br /> <br />
          </div>

          <div className="row pt-2">
            <p style={{ textAlign: "center" }}>
              I agree to the <span style={{color:"#08668F"}}>Terms of Service</span> and <span style={{color:"#08668F"}}>Privacy Policy</span>
            </p>

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
