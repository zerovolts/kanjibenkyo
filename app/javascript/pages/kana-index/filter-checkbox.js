import React from "react"

const FilterCheckbox = ({name, checked, toggleFunction}) => {

  return (
    <label className="filter">
      {name}
      <input
        type="checkbox"
        value={name}
        checked={checked}
        onChange={toggleFunction}
      />
    </label>
  )
}

export default FilterCheckbox
