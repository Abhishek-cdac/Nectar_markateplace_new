import React from "react";
import dummyData from "../../containers/Dummydata";

function ClientSays() {
  return (
    <div>
      <section id="Slider_reviews" style={{height:"420px",marginTop:"2%"}}>
        <div className="container">
          <div className="ReviewHeading">
            <h2>What Our User Says</h2>
            <p>
              At Nectar Infotel, our endeavour is to offer world-class active -
              passive Telecom OSS/BSS & other IT/ITES service s and add maximum
              value to the client by using Artificial Intelligence & Business
              Analytics. As the true pioneer system integrator in this field, we
              have deep understanding of telecom operators’ needs, aspirations
              and dynamics of the market.
            </p>
          </div>
          <div
            id="carouselExampleDark"
            class="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="1000">
                <img
                  src="/assets/images/Avg Images/13454.jpg"
                  class="d-block w-25"
                  alt="..."
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5 style={{ color: "#08668F", fontFamily: "sans-serif" }}>
                    PEPINO PRAZER
                  </h5>
                  <h6 style={{ color: "#f16728" }}>
                    COO- Movicel Telecommunication, SA
                  </h6>
                  <p style={{ color: "black", fontFamily: "sans-serif" }}>
                    We have been working with NECTOR INFOTEL on the technical
                    tasks for more than 4 years. My particular experience with
                    Nectar Infotel in Operation Department is good. Nectar is
                    supporting us in three important areas with CS, PS and OSS
                    Engineers; improving also the monitoring and incident
                    Management of NOC.
                  </p>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="1000">
                <img
                  src="/assets/images/Avg Images/247199.jpg"
                  class="d-block w-25"
                  alt="..."
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5 style={{ color: "#08668F", fontFamily: "sans-serif" }}>
                    PEPINO PRAZER
                  </h5>
                  <h6 style={{ color: "#f16728" }}>
                    COO- Movicel Telecommunication, SA
                  </h6>

                  <p style={{ color: "black", fontFamily: "sans-serif" }}>
                    We have been working with NECTOR INFOTEL on the technical
                    tasks for more than 4 years. My particular experience with
                    Nectar Infotel in Operation Department is good. Nectar is
                    supporting us in three important areas with CS, PS and OSS
                    Engineers; improving also the monitoring and incident
                    Management of NOC.
                  </p>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="1000">
                <img
                  src="/assets/images/Avg Images/311285.jpg"
                  class="d-block w-25"
                  alt="..."
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5 style={{ color: "#08668F", fontFamily: "sans-serif" }}>
                    PEPINO PRAZER
                  </h5>
                  <h6 style={{ color: "#f16728" }}>
                    COO- Movicel Telecommunication, SA
                  </h6>

                  <p style={{ color: "black", fontFamily: "sans-serif" }}>
                    We have been working with NECTOR INFOTEL on the technical
                    tasks for more than 4 years. My particular experience with
                    Nectar Infotel in Operation Department is good. Nectar is
                    supporting us in three important areas with CS, PS and OSS
                    Engineers; improving also the monitoring and incident
                    Management of NOC.
                  </p>
                </div>
              </div>
            </div>
            {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ClientSays;
