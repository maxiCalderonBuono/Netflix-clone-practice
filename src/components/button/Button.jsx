import React from 'react'

const Button = ({type, texto, clases, onClick}) => {
  return (

    <button

    type={type}
    onClick={onClick}

    className={`bg-red-600 text-white font-semibold p-3 rounded-md ${clases}`}

    >{texto}</button>
  )
}

export default Button