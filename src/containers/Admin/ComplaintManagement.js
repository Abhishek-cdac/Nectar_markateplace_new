import React from "react";
import Complaintmanagementfilter from "../../Components/Admin/Complaintmanagementfilter";
import Tables from "../../Components/Admin/Tables";
import dummyData from "../Dummydata";
import DummyData from "../DummyNectarCRM";
const ComplaintManagement = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-lg-6">
            <h4 className="mt-4 mb-4">Complaint Management</h4>
          </div>
          <div className="col userMenuFilter">
            <Complaintmanagementfilter />
          </div>
          <div>
            <hr />
          </div>
        </div>
        <div className="row" style={{ color: "#000000" }}>
          <Tables
            column={DummyData?.ComplaintManagementHeading}
            data={DummyData.ComplaintManagementData
            }
          />
        </div>
      </div>
    </>
  );
};

export default ComplaintManagement;
