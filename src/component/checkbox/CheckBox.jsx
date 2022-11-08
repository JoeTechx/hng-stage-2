import React from "react";
import "./CheckBox.css";
const CheckBox = (props) => {
  const { label, errorMessage, onChange, id, ...checkBoxProps } = props;
  return (
    <div className="checkbox">
      <input onChange={onChange} {...checkBoxProps} />
      <label className="label__input">{label}</label>
    </div>
  );
};

export default CheckBox;
