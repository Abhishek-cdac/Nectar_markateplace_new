import React, { useState } from "react";
import RadioButton from "./Radio";
import dummyData from "../../containers/Dummydata";

function Paymentmenu() {
  const [checkedValue, setIsChecked] = useState(null);
  return (
    <div>
      <button
        type="button"
        className={`fa fa-bars dropdown-toggle-split filterMenuBut`}
        data-bs-toggle="dropdown"
        aria-expanded="false"
      ></button>
      <div className="dropdown-menu FilterRadioGroup">
        <p className="FilterRadioHead">Product</p>
        {dummyData?.product.map((item) => {
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
        <p className="FilterRadioHead">Payment Mode</p>
        {dummyData?.paymentmode.map((item) => {
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
        <p className="FilterRadioHead">Status</p>
        {dummyData?.Status.map((item) => {
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
        {dummyData?.Date.map((item) => {
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
    </div>
  );
}

export default Paymentmenu;
