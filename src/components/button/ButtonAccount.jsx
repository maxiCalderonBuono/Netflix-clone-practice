import React from 'react'

const ButtonAccount = ({text, color, text_color, type, onClick}) => {
  return (
    <button
    type={type}
    onClick={onClick}
    className={`${color} font-medium p-2 px-3 text-${text_color}`}
    > {text} </button>
  )
}

export default ButtonAccount