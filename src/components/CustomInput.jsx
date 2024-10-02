import React from "react";

const CustomInput = (props) => {
  const { label, i_class, i_id,type } = props;
  return (
    <div className="form-floating mb-3">
      <input
        type={type}
        className={`form-control ${i_class}`}
        id={i_id}
        placeholder={label}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default CustomInput;
