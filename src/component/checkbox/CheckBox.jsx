import React from 'react'
import "./CheckBox.css"
const CheckBox = () => {
  return (
    <div className='checkbox'>
    <input type="checkbox" className='checkbox__input'/>
    <label className="label__input">You agree to provide your data to Joex who may contact you</label>
    </div>
  )
}

export default CheckBox