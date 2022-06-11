import React from 'react'
import './InputForm.css'


const InputForm = ({type, value, onChange, onBlur, name, error, touched, htmlFor, label}) => {
 
        return (
      
            <div className="Inputs_label_Contact">
            <input 
            type={type} 
            value={value} 
            onChange={onChange} 
            onBlur={onBlur} 
            id={name}
            name={name}
            placeholder= ' '
            autoComplete="off"
            className={`input_contact text-black bg-white rounded-none absolute mt-1 px-4 py-4 border  
            placeholder-slate-600
            focus:outline-none w-full block
            border-gray-500
    
            ${error && touched ? "border-1 focus:border-red-500 border-red-500" : "focus:border-green-500"}`}
            
            />
        
            <label htmlFor={htmlFor} className={`label_contact text-gray-400`}>{label}</label>
 
          </div>
        )
}

export default InputForm