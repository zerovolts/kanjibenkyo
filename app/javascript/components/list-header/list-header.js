import React from "react";

import RadioButton from "components/radio-button/radio-button";

import "./list-header.scss";

const ListHeader = ({
  title,
  options,
  optionSelection,
  onOptionChange,
  optionThen
}) => {
  const radioButtons = options.map(({ name, value }) => (
    <RadioButton
      key={value}
      value={value}
      selected={optionSelection}
      onChange={onOptionChange}
      then={optionThen}
    >
      {name}
    </RadioButton>
  ));

  return (
    <div className="list-header">
      <div className="list-title">{title}</div>
      <div className="language-buttons">
        <div className="radio-horizontal">{radioButtons}</div>
      </div>
    </div>
  );
};

export default ListHeader;
