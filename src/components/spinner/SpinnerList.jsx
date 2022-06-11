import React from 'react'
import './spinnerList.css'


const SpinnerList = () => {
  return (

      <div className="divSpinner">
      <svg className="spinnerList" viewBox="0 0 50 50" >
        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="8"></circle>
     </svg>

    </div>

  )
}

export default SpinnerList