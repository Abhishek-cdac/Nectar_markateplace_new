import React, { useState } from "react";

function ForgetPassword() {
  return (
    <>
      <section id="loginbg1">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12">
              <div class="panel panel-default">
                <div class="panel-body">
                  <div class="text-center">
                    <h3>
                      <i class="fa fa-lock fa-4x"></i>
                    </h3>
                    <h2 class="text-center">Forgot Password?</h2>
                    <div class="panel-body1">
                      <form
                        id="register-form"
                        role="form"
                        autocomplete="off"
                        class="form"
                        method="post"
                      >
                        <div class="form-group">
                          <div class="input-group">
                            <input
                              id="email"
                              name="email"
                              placeholder="Enter your Email"
                              class="form-control"
                              type="email"
                            />
                          </div>
                        </div>
                        <div class="b1">
                          <button className="resetbutton">
                            Reset Password
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ForgetPassword;
