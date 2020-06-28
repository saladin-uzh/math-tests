import React from 'react'

export default ({ value, text }) => (
  <label>
    <input type="radio" name="answear" value={value} defaultChecked={!value} />
    {text}
  </label>
)
