import React from "react"

const FormField = ({name, type, placeholder, value, icon, handleChangeCallback}) => {
  placeholder = placeholder || name

  return (
    <React.Fragment>
      <span className="text-input-icon">
        {icon}
      </span>
      <input
        onChange={handleChangeCallback}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}>
      </input>
    </React.Fragment>
  )
}

export default FormField
