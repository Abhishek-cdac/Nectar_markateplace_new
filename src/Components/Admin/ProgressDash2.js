import React from "react";
import dummyData from "../../containers/Dummydata";
import Progress from "./Progress";

const ProgressDash = ({Title,progressClass}) => {
  return (
    <section id="ProgressCardsAddash">
      <div className="col">
        <h6 className="progressCard">{Title}</h6>
        {dummyData?.progressCard?.map((item) => 
        <div className="row">
          <p className="ProgressCardHead">{item.title}</p>
          <Progress  ProgressclassName={progressClass} />
        </div>
        )}
      </div>
    </section>
  );
};

export default ProgressDash;
