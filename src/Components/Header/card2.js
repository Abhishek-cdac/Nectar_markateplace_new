import React from "react";
import dummyData from "../../containers/Dummydata";

function card2() {
  console.log("dummydata", dummyData);
  return (
    <div className="row">
      {dummyData &&
        dummyData.CardData.map((data) => (
          <div className="card  small_card col-12 col-sm-6 col-md-4">
            <img src={data.image} style={{height:"61px",width:"81px",paddingTop:"20px"}} alt="..." />
            <div class="card-body">
              <h5 class="card-title">{data.title}</h5>
              <p class="card-text">{data.sort}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default card2;
