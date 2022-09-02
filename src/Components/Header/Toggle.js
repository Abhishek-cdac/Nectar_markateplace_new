import React, { useState } from "react";

const Toggle = () => {
  const [value, setValue] = useState(false);
  const handleToggle = () => {
    setValue(!value);
    console.log("togglevalue", value);
  };

  return (
    <div className="Toggle_main">
      {" "}
      <>
        <div className="Faq_heading">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div style={{marginLeft:"65px",marginTop:"10px"}}>
        <input
          checked={value}
          onChange={handleToggle}
          className="react-switch-checkbox"
          id={`react-switch-new`}
          type="checkbox"
        />
        <label
          className="react-switch-label"
          style={{ content: (value && "#Reseller") || "Partner" }}
          htmlFor={`react-switch-new`}
        >
          <span className={`react-switch-button`} />
        </label>
        {!value ? (
          <div>
            <h1>Reseller</h1>
          </div>
        ) : (
          <div>
            <h1>Partner</h1>
          </div>
        )}
        </div>
      </>
    </div>
  );
};

export default Toggle;
