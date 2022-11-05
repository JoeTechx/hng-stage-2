import React from 'react'
import "./Textarea.css"

const Textarea = (props) => {
    const {label, onChange, id, ...textAreaProps} = props;
  return (
    <div className='textarea__input'>
    <label className='label__textarea'>{label}</label>
    <textarea {...textAreaProps} onChange={onChange}></textarea>
    </div>
  )
}

export default Textarea