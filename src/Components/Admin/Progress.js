import React from "react";
import "../../containers/Admin/admin.css"

const Progress = ({ProgressclassName,progressmain}) => {
  return (
    <span class={`progress DashProCard ${progressmain}`} style={{ height: "5px" }}>
      <div
        class={`progress-bar ${ProgressclassName}`}
        role="progressbar"
        style={{ width: "25%" }}
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </span>
  );
};

export default Progress;
