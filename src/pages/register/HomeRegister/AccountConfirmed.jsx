import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from '../../../config/Axios'

import useAuth from '../../../hooks/useAuth'


const AccountConfirmed = () => {
    const [accountConfirmed, setAccountConfirmed] = useState(false)
    const {setAuth} = useAuth()

    const navigate = useNavigate()

    

    const params = useParams()

    const { id } = params
    
  
    useEffect(() => {

      const accountConfirmed = async () => {
  
        try {

          const datos = await axios(`/confirmed/${id}`)
   
          setAccountConfirmed(true)
        

          const {data} = await axios.post('/login-auto', datos.data)
          console.log(data)
        
          localStorage.setItem('t00321oxpanetflix012x', data.token)

          setAuth(data)

        } catch (error) {
          
          console.log(error)
          return 
        }
  
        setTimeout(() => {

          window.location.href = `${import.meta.env.VITE_URL_FRONT}/browse/add-profile`
          
  
        }, 1500)

      }

      accountConfirmed()

  
    }, [])
   

  return (
    <>  
  <div className="p-5">
    {accountConfirmed ? 
    
      (<div className="lg:w-1/2 mx-auto mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-lg bg-sky-600">
          <h2 
          className=" text-center w-full uppercase py-3 px-10 rounded-xl text-white font-bold
          md:w-auto"
          >cuenta confirmada con exito</h2>
      </div>)
      
      : 
      
      (<div className="lg:w-1/2 mx-auto mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-lg bg-amber-600">

        <h2 
        className=" text-center  w-full uppercase py-3 px-10 rounded-xl text-white font-bold
        md:w-auto"
        >Token no valido</h2>

      </div>)
      

    }

  </div>

    

    </>

  )
}

export default AccountConfirmed