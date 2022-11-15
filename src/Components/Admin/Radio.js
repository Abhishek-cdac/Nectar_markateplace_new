import React from "react";

const RadioButton = ({ type, id, name, label, checked, onChange ,className }) => {
  return (
    <>
      <input
        type={type}
        id={id}
        className={className}
        value={id}
        name={name}
        aria-label={label}
        aria-checked={checked}
        radio={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </>
  );
};

export default RadioButton;
