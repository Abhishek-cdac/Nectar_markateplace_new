import { React, useState } from "react";
import RadioButton from "./Radio";
import dummyData from "../../containers/Dummydata";
const SwitchMenu = () => {
  const [checkedValue, setIsChecked] = useState(null);

  return (
    <>
      <button
        type="button"
        className={`fa fa-bars dropdown-toggle-split filterMenuBut`}
        data-bs-toggle="dropdown"
        aria-expanded="false"
      ></button>
      <div className="dropdown-menu FilterRadioGroup" style={{width:'230px' ,paddingLeft:"20px"  }}>
        <p className="FilterRadioHead">Country</p>
        {dummyData?.CountryFilter.map((item) => {
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
        <p className="FilterRadioHead">Defined Role</p>
        {dummyData?.RoleFilter.map((item) => {
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
        <p className="FilterRadioHead">Registration Time</p>
        {dummyData?.RegistrationFilter.map((item) => {
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
  );
};

export default SwitchMenu;
