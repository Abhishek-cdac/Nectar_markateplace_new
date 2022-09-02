import React, { useState } from "react";
import { Accordian, AccodionPartner } from "./Accordian";

const Toggle = () => {
  const [value, setValue] = useState(false);
  const handleToggle = () => {
    setValue(!value);
    console.log("togglevalue", value);
  };

  return (
    <>
      <div className="Toggle_main">
        <div className="Faq_heading">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="switch_toggle">
          <input
            checked={value}
            onChange={handleToggle}
            className="react-switch-checkbox"
            id={`react-switch-new`}
            type="checkbox"
          />
          <label className="react-switch-label" htmlFor={`react-switch-new`}>
            {" "}
            <div className="toggleLabel">
              <h4>Reseller</h4>
            </div>
            <div className="toggleLabel">
              <h4>Partner</h4>
            </div>
            <span className={`react-switch-button`}>
              <div className="toggleSwitchLabel">
                {!value ? <h4>Reseller</h4> : <h4>Partner</h4>}
              </div>
            </span>
          </label>
        </div>
      </div>
      <div>{!value ? <Accordian /> : <AccodionPartner />}</div>
    </>
  );
};

export default Toggle;
