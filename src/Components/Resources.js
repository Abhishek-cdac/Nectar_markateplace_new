import React from "react";
import "./resources.css";

function Resources() {
  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-lg-12">
            <div class="card">
              <div class="card-body text-center">
                <h2 class="card-title">Hi, Welcome to Nectar Resouces</h2>
                <h6 class="card-title1" >
                  Get answers and explore new ways to use Nectar Prosucts
                </h6>
                <div className="text-center">
                  <p
                    style={{
                      backgroundColor: "#1291C9",
                      color: "#fff",
                      padding: "1%",
                      marginLeft: "15%",
                      marginRight: "15%",
                    }}
                  >
                    What are you looking for ?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-6">
            <div className="resourcecard">
              <div class="card">
                <img
                  src="/assets/images/clod.png"
                  class="card-img-top resourceCardimg"
                  alt=""
                />
                <div class="card-body">
                  <h3 class="card-title">Getting Started</h3>
                  <p class="card-text">
                    Get introduces to the basic learn how to implement NECTAR
                    Product to your business. Refer to our checklist to get
                    started.
                  </p>
                  <div className="text-center">
                    <button href="#" class="btn btn-primary">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="resourcecard">
              <div class="card">
                <img
                  src="/assets/images/clod.png"
                  class="card-img-top resourceCardimg"
                  alt=""
                />
                <div class="card-body">
                  <h3 class="card-title">Documentation</h3>
                  <p class="card-text">
                    Gain in-depth knowledge of NECTAR'S features on
                    customization, automation, security, etc. and learn how to
                    set up and implement the product for your growing business.
                  </p>
                  <div className="text-center">
                    <button href="#" class="btn btn-primary">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-4">
            <div className="resourcecard " >
              <div class="card">
                <img
                  src="/assets/images/clod.png"
                  class="card-img-top resourceCardimg"
                  alt=""
                />
                <div class="card-body">
                  <h5 class="card-title">FAQS</h5>
                  <p class="card-text">
                    Gain in-depth knowledge of NECTAR'S features on
                    customization, automation, security, etc. and learn how to
                    set up and implement the product for your growing business..
                  </p>
                  <div className="text-center">
                    <button href="#" class="btn btn-primary">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="resourcecard">
              <div class="card">
                <img
                  src="/assets/images/clod.png"
                  class="card-img-top resourceCardimg"
                  alt=""
                />
                <div class="card-body">
                  <h5 class="card-title">Developer Space</h5>
                  <p class="card-text">
                    Gain in-depth knowledge of NECTAR'S features on
                    customization, automation, security, etc. and learn how to
                    set up and implement the product for your growing business..
                  </p>
                  <div className="text-center">
                    <button href="#" class="btn btn-primary">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="resourcecard">
              <div class="card">
                <img
                  src="/assets/images/clod.png"
                  class="card-img-top resourceCardimg"
                  alt=""
                />
                <div class="card-body">
                  <h5 class="card-title">eBooks</h5>
                  <p class="card-text">
                    Gain in-depth knowledge of NECTAR'S features on
                    customization, automation, security, etc. and learn how to
                    set up and implement the product for your growing business.
                  </p>
                  <div className="text-center">
                    <button href="#" class="btn btn-primary">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3 mb-5">
          <div className="col-lg-6">
            <div className="resourcecard1">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Videos</h5>
                  <p class="card-text">
                    Gain in-depth knowledge of NECTAR'S features on
                    customization, automation, security, etc. and learn how to
                    set up and implement the product for your growing business.
                  </p>
                  <div className="text-center">
                    <button href="#" class="btn btn-primary">
                      Watch all Videos
                    </button>
                  </div>
                </div>
                <video width="320" height="265" controls>
                  <source src="https://www.sample-videos.com/video123/mp4/240/big_buck_bunny_240p_5mb.mp4" type="video/mp4" />
                  {/* <source src="movie.ogg" type="video/ogg" /> */}
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resources;
