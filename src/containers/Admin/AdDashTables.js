import React from "react";
import dummyData from "../Dummydata";
import Tables from "../../Components/Admin/Tables";

const AdDashTables = () => {
  return (
    <section id="AdDashTable">
      <div style={{width:"100%"}}>
        <div className="AdDashTableHead">
          <h6 className="Adh6">Recent Orders</h6>
          <button className="dashtableButton"> View  All</button>
        </div>
        <Tables column={dummyData?.DahsTable2Head} data={dummyData.DashTable2} navigateUrl="/partner" />
      </div>
    </section>
  );
};

export default AdDashTables;
