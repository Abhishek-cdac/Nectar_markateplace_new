import { React, useState } from "react";
import RadioButton from "./Radio";
import DummyData from "../../containers/DummyNectarCRM";


const Complaintmanagementfilter = () => {
    const [checkedValue, setIsChecked] = useState(null);
  return (
    <>
      <button
        type="button"
        className={`fa fa-bars dropdown-toggle-split filterMenuBut`}
        data-bs-toggle="dropdown"
        aria-expanded="false"
      ></button>
      <div className="dropdown-menu FilterRadioGroup"  style={{width:'300px' ,paddingLeft:"30px"  }}>
        <p className="FilterRadioHead">Status</p>
        {DummyData?.Status.map((item) => {
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
        <p className="FilterRadioHead">Complaint ID</p>
        {DummyData?.complaintId.map((item) => {
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
        <p className="FilterRadioHead">Complaint ID</p>
        {DummyData?.ComplaintId.map((item) => {
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

export default Complaintmanagementfilter