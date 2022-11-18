import React from "react";
import Adcard from "../../Components/Admin/Adcard";
import { AdcardData } from "../../utils/AdcardData";
import PieChart from "../../Components/Admin/piechart";
import Adchart1 from "../../Components/Admin/AdDashChart1";
import Worldmap from "../../containers/Admin/Worldmap";
import ProductChart from "../../Components/Admin/AdDashProdChart";
import Demo from "../../containers/Admin/Demo&user";
import ProgressDash from "../../Components/Admin/ProgressDash2";
import AdDashTables from "../../containers/Admin/AdDashTables";


const AdDAshboard = () => {
  return (
    <>
      <div className="row" style={{backgroundColor:"#EBEBEB"}}>
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
      <div className="row" style={{paddingTop:"2em"}}>
        <Adchart1 />
        <PieChart />
        <Worldmap />
        <div className="col">
        <ProductChart />
        <Demo />
        </div>
        <ProgressDash Title="Top Selling Products" progressClass="progress-bar-adDash" />
        <ProgressDash Title="Most View Product" progressClass="progress-bar-adDash2"/>
        <AdDashTables/>
      </div>
    </>
  );
};

export default AdDAshboard;
