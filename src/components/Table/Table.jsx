import React from 'react'

const Table = ({texto, td1, td2, td3}) => {
  return (

    <tr className="text-center border border-x-0 border-t-0 grid justify-items-center grid-cols-5 items-center">
        <td className="text-left p-4 w-full col-span-2">{texto}</td>
        <td className="text-gray-600 font-medium ">{td1}</td>
        <td className="text-gray-600 font-medium ">{td2}</td>
        <td className="text-gray-600 font-medium ">{td3}</td>
    </tr>
  )
}

export default Table