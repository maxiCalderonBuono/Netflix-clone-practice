import React from 'react'

const AlertLogin = ({error, text}) => {
  return (
    <div className={`text-sm text-white text-center ${error ? 'bg-amber-600' : 'bg-sky-600'}  text-center  p-3 rounded-md`}>

        <p>{text}</p>
    </div>
  )
}

export default AlertLogin