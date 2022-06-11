import React from 'react'
import './Input.css'

const Input = ({type, value, onChange, onBlur, name, color, error, touched, label, color_label}) => {
  return (

      <div className="Inputs_label_Contact">
        <input 
        type={type} 
        value={value} 
        onChange={onChange} 
        onBlur={onBlur} 
        name={name}
        id={name}
        autoComplete="off"
        placeholder= ' '

        className={`${color} input_contact absolute mt-1 px-4 py-4 border text-gray-200 
        placeholder-slate-400 border-transparent
        focus:outline-none w-full block rounded-md 

        ${error && touched ? "border-4 focus:border-b-amber-600 border-b-amber-600" : "border-transparent" } `}
        
        />
    
        <label htmlFor={name} className={`label_contact ${color_label} text-gray-400`}>{label}</label>

  
      </div>
  )
}

export default Input