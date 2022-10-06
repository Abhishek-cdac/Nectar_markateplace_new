import React from "react";
import RadioButton from "../../../Components/Admin/Radio";
import Tables from "../../../Components/Admin/Tables";
import dummyData from "../../Dummydata";
import Subscribed from "./Subscribed";
import SwitchMenu from "../../../Components/Admin/FilterMenu";

const AdUserMan = () => {
  const [checkedValue, setIsChecked] = React.useState(1);
  console.log(checkedValue);

  return (
    <div className="container">
      <div class="row ">
        <div class="col text-left adminSecHeading">
          <h4 className="mt-4 mb-4">{`User Management / ${
            checkedValue == 1 ? "Registered User" : "Subscribed User"
          }`}</h4>
        </div>
        <div className="row">
          <div class="col col-lg-6 UserManRadio">
            {dummyData?.someData.map((item) => {
              return (
                <RadioButton
                  type="radio"
                  key={item.id}
                  id={item.id}
                  name="radioGroup"
                  className="UserRadio"
                  label={item.label}
                  checked={checkedValue === item.id}
                  onChange={() => setIsChecked(item.id)}
                />
              );
            })}
          </div>

          <div className="col userMenuFilter">
            <SwitchMenu />
          </div>
        </div>
        {checkedValue == 1 ? (
          <Tables
            column={dummyData?.usersHeading}
            data={dummyData.RegisteredUSers}
          />
        ) : (
          <Subscribed />
        )}
      </div>
    </div>
  );
};

export default AdUserMan;
