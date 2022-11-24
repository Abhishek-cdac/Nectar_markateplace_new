import React from "react";
import DummyData from "./DummyNectarCRM";
import Contact from "../assets/Contact.png";
import Form from "../Components/Form";

function NectarCRMoverview() {
  console.log("dummydata", DummyData);
  return (
    <div className="crm-overview">
      {DummyData &&
        DummyData.TabsData.map((data) => (
          <div>
            <div className="card container ">
              <div className="row pt-3 text-center">
                <div className="col-md-12">
                  <h2>{data.title}</h2>
                </div>
              </div>
              <div className="row text-center">
                <div className="col-md-12">
                  <p>{data.description}</p>
                </div>
              </div>
              <div className="row">
                <p class="border-bottom overViewText pt-3 OverViewText">
                  {data.head1}
                </p>
              </div>
              <div className="row">
                <p class="border-bottom overViewText">{data.head2}</p>
              </div>
              <div className="row">
                <p class="border-bottom overViewText">{data.head3}</p>
              </div>

              <div className="row">
                <p class="border-bottom overViewText">{data.head4}</p>
              </div>
              <div className="border-bottom overViewText">
                <p> {data.head5}</p>
              </div>
            </div>

            <Form />
          </div>
        ))}
    </div>
  );
}

export default NectarCRMoverview;
