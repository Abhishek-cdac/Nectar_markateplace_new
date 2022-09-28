import React from "react";
import dummyData from "../Dummydata";

const Demo = () => {
  return (
    <div className="row">
      <section id="demopro">
        <div class="col-md-12">
          <p className="DemoCardHead">Total Demo Provided</p>
          <p className="DemoCardnum">102</p>
          <div class="progress Demoprogress blue">
            <span class="progress-left">
              <span class="progress-bar"></span>
            </span>
            <span class="progress-right">
              <span class="progress-bar"></span>
            </span>
            <div class="progress-value">1260</div>
          </div><hr/>
          <p className="DemoCardnum">3.2% Since Yesterday</p>
        </div>
      </section>
      <section id="userProg">
        <div className="col">
          <p className="DemoCardHead">Total Users Activity</p>
          <p className="DemoCardnum">25868</p>
          {dummyData?.progressUsersData.map((item) => (
            <div>
              <p className="DemoCardnumPro">{item.name}</p>
              <span class="progress" style={{ height: "5px" }}>
                <div
                  class={`progress-bar ${item.name}bar`}
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Demo;
