import React from "react";
import dummyData from "../../containers/Dummydata";
import { useNavigate } from "react-router-dom";

function Card2() {
  const navigate = useNavigate();

  return (
    <div className="row" style={{ justifyContent: "center" ,marginLeft:"13px"}}>
      {dummyData &&
        dummyData.CardData.map((data) => (
          <div className="card  small_card col-12 col-lg-3 col-sm-6 col-md-6">
            <img
              src={data.image}
              style={{ height: "65px", width: "81px", paddingTop: "20px" }}
              alt="..."
            />
            <div
              className="verticalLine_header"
              style={{
                borderRight: "0.5px solid grey",
                height: "auto",
                margin: "2%",
                opacity: 0.5,
              }}
            ></div>
            <div class="card-body">
              <h6 class="card-title">{data.title}</h6>
              <p class="card-text">
                {data.sort.split("").splice(0, 45).join("") +
                  (data.sort?.split(" ").length > 10 ? "..." : "")}
              </p>
              <button
                className="Learn_card2"
                onClick={() => navigate(data.url)}
                 >
                <div>
                Learn More <span> <i className="fa fa-long-arrow-right" style={{color:"#F16728",fontSize:"large"}}/></span></div>
                
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Card2;
