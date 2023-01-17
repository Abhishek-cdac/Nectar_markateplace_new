import React from "react";

function ReviewForm() {
  return (
    //   {/* <section className="backgroundimage-review-form">
    //     <div className="container">
    //       <div className="row">
    //         <form>
    //           <div class="form-group">
    //             <div className="d-flex justify-content-center">
    //               <p className="content-review-form">
    //                 Please Leave Us a Testimonial
    //               </p>
    //             </div>
    //             <input
    //               type="email"
    //               className="textfield-review-form"
    //               id="exampleFormControlInput1"
    //               placeholder="Email ID"
    //             />
    //           </div>
    //           <br></br>
    //           <div class="form-group">
    //             <input
    //               type="email"
    //               className="textfield-review-form"
    //               id="exampleFormControlInput1"
    //               placeholder="Password"
    //             />
    //           </div>
    //           <br></br>
    //           <div class="form-group">
    //             <textarea
    //               className="textfieldwords"
    //               id="exampleFormControlTextarea1"
    //               rows="3"
    //               placeholder="Your words"
    //             ></textarea>
    //           </div>
    //           <br></br>
    //           <div className="d-flex justify-content-center">
    //             <button className="btn-review-form">Send</button>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </section> */}

    <section className="Testimonal_Home">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="testimonal_heading">
            <h2>Please Leave us a Testimonal</h2>
          </div>
          <form className="form-testimonal">
            <div class="form-group col-md-6 mb-4">

              <input
                type="text"
                class="form-control  form-control-lg testimonalInput"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Name"
                style={{height:"50px",fontSize:"15px"}}
              />

            </div>
            <div class="form-group col-md-6 mb-4">

              <input
                type="email"
                class="form-control form-control-lg testimonalInput"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email Id"
                style={{height:"50px",fontSize:"15px"}}
              />
            </div>
            <div class="form-group col-md-6 mb-4">
              <textarea
                type="textArea"
                class="form-control form-control-lg testimonalInput"
                id="exampleInputPassword1"
                placeholder="Your Words"
                style={{height:"110px",fontSize:"15px"}}
              />
            </div>

            <button type="submit" class="btn btn-primary btn-lg submit_form">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ReviewForm;
