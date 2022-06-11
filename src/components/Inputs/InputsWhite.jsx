import React from 'react'
import './Input.css'

const InputsWhite = ({type, value, onChange, onBlur, name, placeholder, clases}) => {
  return (

    <input 
    type={type} 
    value={value} 
    placeholder={placeholder}
    onChange={onChange} 
    onBlur={onBlur} 
    name={name}
    className={`text-black p-3 rounded-sm bg-white ${clases}`}
    
    
    
    />

  )
}

export default InputsWhite