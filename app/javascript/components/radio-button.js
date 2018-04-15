import React from "react"

const RadioButton = ({value, selected, onChange, children}) => {
  return (
    <React.Fragment>
      <input
        type="radio"
        name="section"
        defaultChecked={value == selected}
        id={value}
        key={value + "-input"}
        onClick={() => onChange(value)} />
      <label htmlFor={value} key={value + "-label"}>{children}</label>
    </React.Fragment>
  )
}

export default RadioButton
