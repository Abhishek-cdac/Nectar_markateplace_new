import React from "react";
import DummyData from "./DummyNectarCRM";

const SupportTable = () => {
  return (
    <div className="container-fluid">
      <div className="col-lg-12 col-sm-8 col-md-12">
        <div className="row">
          <table
            class="table table-bordered "
            style={{ backgrounColor: "#FFFFFF" }}
          >
            <thead>
              {DummyData &&
                DummyData.viewActiveOffer.map((data) => (
                  <tr>
                    <th scope="col">{data.offer}</th>
                    <th scope="col">{data.onproduct}</th>
                    <th scope="col">{data.offerDate}</th>
                    <th scope="col">{data.offertype}</th>
                    <th scope="col">{data.validity}</th>
                    <th scope="col">{data.Status}</th>
                    <th scope="col">{data.icons}</th>
                  </tr>
                ))}
            </thead>
            <tbody>
              {DummyData &&
                DummyData.viewActiveOfferData.map((data) => (
                  <tr>
                    <th scope="row">{data.offer}</th>

                    <td>{data.onproduct}</td>
                    <td>{data.offerDate}</td>
                    <td>{data.offertype}</td>
                    <td>{data.validity}</td>
                    {/* <button className="paid-btn m-2">{data.Status}</button> */}
                    <td>{data.Status}</td>

                    <i class="fa-regular fa-eye"></i>
                    <i class="fa-sharp fa-solid fa-pen"></i>
                    <i class="fa-solid fa-trash"></i>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SupportTable;
