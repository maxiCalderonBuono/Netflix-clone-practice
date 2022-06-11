import React from 'react'

const ButtonPlan = ({texto, clases}) => {
  return (
    <button 
    className={`bg-red-400 py-5 text-xs px-2 lg:px-6 lg:py-12 ${clases} capitalize text-white font-bold lg:text-lg focus:bg-red-600`}
    
    
    >{texto}</button>
  )
}

export default ButtonPlan