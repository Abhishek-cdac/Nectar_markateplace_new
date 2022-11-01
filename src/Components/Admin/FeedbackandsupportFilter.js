import { React, useState } from "react";
import RadioButton from "./Radio";
import DummyData from "../../containers/DummyNectarCRM";

const FeedbackandsupportFilter = () => {
  const [checkedValue, setIsChecked] = useState(null);
  return (
    <>
    <button
        type="button"
        className={`fa fa-bars dropdown-toggle-split filterMenuBut`}
        data-bs-toggle="dropdown"
        aria-expanded="false"
      ></button>
      <div className="dropdown-menu FilterRadioGroup"  style={{width:'230px' ,paddingLeft:"20px"  }}>
        <p className="FilterRadioHead">Country</p>
        {DummyData?.CountryFilter.map((item) => {
          return (
            <>
              <RadioButton
                type="radio"
                key={item.id}
                id={item.id}
                name="radioGroup"
                className="UserRadioFilter"
                label={item.label}
                checked={checkedValue === item.id}
                onChange={() => setIsChecked(item.id)}
              />
              <br />
              
            </>
          );
        })}
           
                <div class=" col-lg-8 mb-4"  >
                  <select
                    id="disabledSelect"
                    class="form-select"
                    style={{ width: "100%" ,fontSize:"12px"}}
                  >
                    <option>Promocode</option>
                    <option>Nectar HRMS</option>
                    <option>Nectar GPS Tracker</option>
                    <option>nDatu - Task Manager</option>
                    <option>Nerro Trac-Bug Tracker</option>
                    <option>NT3-ITSM Tool</option>
                  </select>
                </div>
             
        <p className="FilterRadioHead">Product</p>
        {DummyData?.Products.map((item) => {
          return (
            <>
              <RadioButton
                type="radio"
                key={item.id}
                id={item.id}
                name="radioGroup"
                className="UserRadioFilter"
                label={item.label}
                checked={checkedValue === item.id}
                onChange={() => setIsChecked(item.id)}
              />
              <br />
            </>
          );
        })}
        <p className="FilterRadioHead">Date</p>
        {DummyData?.Date.map((item) => {
          return (
            <>
              <RadioButton
                type="radio"
                key={item.id}
                id={item.id}
                name="radioGroup"
                className="UserRadioFilter"
                label={item.label}
                checked={checkedValue === item.id}
                onChange={() => setIsChecked(item.id)}
              />
              
              <br />
              
            </>
          );
        })}
      </div>
      </>
  )
}

export default FeedbackandsupportFilter