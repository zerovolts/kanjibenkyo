import React from "react";

import "./radio-button.scss";

const RadioButton = ({ value, selected, onChange, then, children }) => {
  return (
    <React.Fragment>
      <input
        type="radio"
        name="section"
        defaultChecked={value == selected}
        id={value}
        key={value + "-input"}
        onClick={() => onChange(value)}
      />
      <label htmlFor={value} key={value + "-label"} onTransitionEnd={then}>
        {children}
      </label>
    </React.Fragment>
  );
};

export default RadioButton;
