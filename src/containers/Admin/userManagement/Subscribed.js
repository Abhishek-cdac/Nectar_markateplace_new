import React from "react";
import Tables from "../../../Components/Admin/Tables";
import dummyData from "../../Dummydata";
const Subscribed = () => {

  return (
    <>
      <ul class="nav nav-tabs UserTableTabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class={"nav-link active table-nav-link"
          
          }
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
            // onClick={() => {
            //   SetActiveButt("home");
            // }}
          >
            partner
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class={"nav-link table-nav-link"} 
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Reseller
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <Tables
            column={dummyData?.usersHeading}
            data={dummyData.RegisteredUSers}
          />
        
        </div>
        <div
          class="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <Tables
            column={dummyData?.usersHeading}
            data={dummyData.RegisteredUSers}
          />
        </div>
      </div>
    </>
  );
};

export default Subscribed;
