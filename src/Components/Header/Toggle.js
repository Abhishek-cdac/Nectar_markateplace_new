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
        <div style={{ marginLeft: "65px", marginTop: "10px" }}>
          <input
            checked={value}
            onChange={handleToggle}
            className="react-switch-checkbox"
            id={`react-switch-new`}
            type="checkbox"
          />
          <label className="react-switch-label" htmlFor={`react-switch-new`}>
            {" "}
            {/* {!value ? ( */}
            <div className="toggleLabel">
              <h4>Reseller</h4>
            </div>
            {/* ) : ( */}
            <div className="toggleLabel">
              <h4>Partner</h4>
            </div>
            {/* )} */}
            <span className={`react-switch-button`}>
              {/* <h5 className="toggleSwitchLabel">Reseller</h5> */}

              <div className="toggleSwitchLabel">
                {!value ? <h4>Reseller</h4> : <h4>Partner</h4>}
              </div>
            </span>
          </label>
          {/* {!value ? (
            <div>
              <h1>Reseller</h1>
            </div>
          ) : (
            <div>
              <h1>Partner</h1>
            </div>
          )} */}
        </div>
        
      </>
    </div>
  );
};

export default Toggle;
