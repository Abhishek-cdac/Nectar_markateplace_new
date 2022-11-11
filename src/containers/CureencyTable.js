import React, { useState } from "react";
import dummyData from "./Dummydata";

function CureencyTable() {
  const Trigger = (data) => {
    const divsToHide = document.getElementsByClassName("table-tr");
    for (var i = 0; i < divsToHide.length; i++) {
      if (i != data) {
        divsToHide[i].style.display = "none";
      }
    }
  };

  return (
    <div>
      <table class="table table-bordered">
        <tbody>
          {dummyData &&
            dummyData.Cryptocurrencyselect.map((data) => (
              <tr id={data.id} className="table-tr">
                <td>
                  <img src={data.img} style={{ height: "30px" }}></img>
                </td>
                <td> {data.ruppes}</td>
                <td
                  style={{ color: "#08668F", fontSize: "12px" }}
                  onClick={() => {
                    Trigger(data.id);
                  }}
                >
                  {data.selectcurrency}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default CureencyTable;
