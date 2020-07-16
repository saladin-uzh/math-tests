import React from 'react'

export default ({ value, text, handleChange, isSelectedAnswear }) => (
  <label>
    <input
      type="radio"
      name="answear"
      value={value}
      defaultChecked={isSelectedAnswear}
      onChange={handleChange}
    />
    {text}
  </label>
)
