import React from 'react'

function GPSAccordian() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xl-12 pt-5'>
          <h1 className='text-center'>Real Time Tracking</h1>
          <h5 className='text-center'>Nectar GPS tracker give the real experience for the tracking and convey the real time location to the user</h5>
          <div className="accordion pt-5" id="accordionExample">
            <div className='col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xl-12 pt-5'>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed  accordian_heading"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Fleet / Delivery Tracking
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accordian_description">
                    The extensions for the partners available here is nothing a differnt extension which could be explained in any certan space.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed  accordian_heading"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Vehicle Tracking
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accordian_description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis quod eaque modi consectetur provident ratione id
                    qui dolorem reprehenderit eius ea molestiae voluptate nemo dicta
                    odit inventore pariatur, quisquam dolore.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed   accordian_heading"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    School Bus Tracking
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accordian_description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                    ad harum placeat alias consequatur odit corrupti et non, omnis
                    perspiciatis corporis ipsum beatae officiis distinctio. Amet at
                    natus corrupti accusamus.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed accordian_heading"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Employee Tracking
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse "
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accordian_description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis nostrum possimus iure sit, dicta assumenda, velit
                    nobis voluptas ad corrupti neque accusantium non. Vel,
                    voluptatum. Perspiciatis accusantium est voluptatem minima!
                  </div>
                </div>
              </div>

              </div>
            </div>

          </div>
        </div>


      </div>
      )
}

      export default GPSAccordian