import React from "react"

const FilterCheckbox = ({name, checked, toggleFunction}) => {

  return (
    <React.Fragment>
      <input
        id={name}
        type="checkbox"
        value={name}
        checked={checked}
        onChange={toggleFunction} />
      <label htmlFor={name} className="filter">{name}</label>
    </React.Fragment>
  )
}

export default FilterCheckbox
