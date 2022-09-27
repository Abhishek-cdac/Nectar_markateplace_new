import React from "react";
import Adcard from "./Components/Admin/Adcard";
import shooping from "./assets/shooping.svg";
import { AdcardData } from "./utils/AdcardData";
import PieChart from "./Components/Admin/piechart";
import Adchart1 from "./Components/Admin/AdDashChart1";

const ex = () => {
  return (
    <>
      <div className="row">
        {console.log(AdcardData)}
        {AdcardData.map((item) => {
          return (
            <Adcard
              NoOfProducts={item.NoOfProducts}
              image={item.image}
              footeritem={item.footeritem}
              footerNo={item.footerNo}
              className={item.className}
            />
          );
        })}
      </div>
      <div className="row">
        <Adchart1 />
        <PieChart />
      </div>
    </>
  );
};

export default ex;
